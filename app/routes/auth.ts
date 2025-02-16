import { json } from "@remix-run/node";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from '~/db.server';

/**
 * Authentication Handler Module
 * 
 * This module handles user authentication including registration and login.
 * It uses Prisma for database operations, bcrypt for password hashing,
 * and JWT for token generation.
 */

/**
 * Main action handler for authentication requests
 * Supports two modes: 'register' and 'login'
 * 
 * @param {Request} request - The incoming HTTP request object
 * @returns {Promise<Response>} JSON response with appropriate status codes
 */
export const action = async ({ request }: { request: Request }) => {
  try {
    // Parse the incoming JSON request body
    const formData = await request.json();
    const { email, password, mode } = formData;

    // Validate required fields
    if (!email || !password || !mode) {
      return json({ error: "Email, password, dan mode diperlukan" }, { status: 400 });
    }

    // Handle user registration
    if (mode === "register") {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return json({ error: "Email sudah digunakan" }, { status: 400 });
      }

      // Hash password and create new user
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({ data: { email, password: hashedPassword } });

      return json({ message: "Pendaftaran berhasil" }, { status: 201 });
    } 
    // Handle user login
    else if (mode === "login") {
      // Verify user credentials
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return json({ error: "Email atau password salah" }, { status: 400 });
      }

      // Generate JWT token with 1 hour expiration
      const token = jwt.sign(
        { userId: user.id }, 
        process.env.JWT_SECRET || 'secret', 
        { expiresIn: '1h' }
      );

      return json({ token }, { status: 200 });
    }
  } catch (error) {
    // Handle unexpected errors
    return json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
};

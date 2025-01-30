import { json } from "@remix-run/node";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from '~/db.server';

// Simulasi database dalam memori
// const users: { email: string; password: string }[] = [];

// Ekspor action untuk menangani POST request
export const action = async ({ request }: { request: Request }) => {
  try {
    const formData = await request.json();
    const { email, password, mode } = formData;

    if (!email || !password || !mode) {
      return json({ error: "Email, password, dan mode diperlukan" }, { status: 400 });
    }

    if (mode === "register") {
      const existingUser = await db.user.findUnique({ where: { email } });
      if (existingUser) {
        return json({ error: "Email sudah digunakan" }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await db.user.create({ data: { email, password: hashedPassword } });

      return json({ message: "Pendaftaran berhasil" }, { status: 201 });
    } else if (mode === "login") {
      const user = await db.user.findUnique({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return json({ error: "Email atau password salah" }, { status: 400 });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

      return json({ token }, { status: 200 });
    }
  } catch (error) {
    return json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
};

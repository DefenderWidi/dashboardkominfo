import { json } from "@remix-run/node";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Simulasi database dalam memori
const users: { email: string; password: string }[] = [];

// Ekspor action untuk menangani POST request
export const action = async ({ request }: { request: Request }) => {
  try {
    const formData = await request.json();
    const { email, password, mode } = formData;

    if (!email || !password || !mode) {
      return json({ error: "Email, password, dan mode diperlukan" }, { status: 400 });
    }

    if (mode === "register") {
      if (users.find((user) => user.email === email)) {
        return json({ error: "Email sudah digunakan" }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ email, password: hashedPassword });

      return json({ message: "Pendaftaran berhasil" }, { status: 201 });
    } else if (mode === "login") {
      const user = users.find((u) => u.email === email);
      if (!user) {
        return json({ error: "Email tidak ditemukan" }, { status: 401 });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return json({ error: "Password salah" }, { status: 401 });
      }

      const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "1h" });

      return json({ message: "Login berhasil", token }, { status: 200 });
    }

    return json({ error: "Mode tidak valid" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
};

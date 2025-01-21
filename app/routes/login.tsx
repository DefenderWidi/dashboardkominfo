import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "password") {
      // Simulasikan pengaturan cookie autentikasi
      document.cookie = "isAuthenticated=true; path=/; max-age=3600"; // Cookie 1 jam
      navigate("/", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('./loginbackground.png')",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md sm:max-w-lg">
        {/* Foto Header */}
        <div className="flex justify-center mb-4">
          <img
            src="./fotoheader.png"
            alt="Header"
            className="w-18 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Selamat Datang kembali
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white text-black border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
              placeholder="Masukkan kata sandi Anda"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md py-2 mt-4 hover:from-blue-600 hover:to-blue-700 focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center space-y-3">
          <p className="text-sm text-gray-700">
            Belum punya akun?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Buat di sini
            </a>
          </p>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Lupa Kata Sandi?
          </a>
        </div>
      </div>
    </div>
  );
}

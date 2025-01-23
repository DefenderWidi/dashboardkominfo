import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <motion.div
        className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }} // Awal animasi
        animate={{ opacity: 1, scale: 1 }} // Akhir animasi
        transition={{ duration: 0.8, ease: "easeOut" }} // Transisi
      >
        {/* Foto Header */}
        <div className="flex justify-center mb-4">
          <img src="./fotoheader.png" alt="Header" className="w-18 h-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Selamat Datang Kembali!
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

          <div className="mb-4 relative">
  <label
    htmlFor="password"
    className="block text-gray-700 font-medium"
  >
    Kata Sandi
  </label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full bg-white text-black border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
      placeholder="Masukkan kata sandi Anda"
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute inset-y-0 right-3 flex items-center"
    >
      {showPassword ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-gray-500 hover:text-gray-800"
        >
          <path
            fill="currentColor"
            d="m10.12 10.827l4.026 4.027a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.23 3.23A6 6 0 0 0 3.2 6.182a6.7 6.7 0 0 0-1.117 1.982c-.021.061-.047.145-.047.145l-.018.062s-.076.497.355.611a.5.5 0 0 0 .611-.355l.001-.003l.008-.025l.035-.109a5.7 5.7 0 0 1 .945-1.674a5 5 0 0 1 1.124-1.014L6.675 7.38a2.5 2.5 0 1 0 3.446 3.446m-.74-.74A1.5 1.5 0 1 1 7.413 8.12zM6.32 4.2l.854.854Q7.564 5 8 5c2.044 0 3.286.912 4.028 1.817a5.7 5.7 0 0 1 .945 1.674q.025.073.035.109l.008.025v.003l.001.001a.5.5 0 0 0 .966-.257v-.003l-.001-.004l-.004-.013a2 2 0 0 0-.06-.187a6.7 6.7 0 0 0-1.117-1.982C11.905 5.089 10.396 4 8.002 4c-.618 0-1.177.072-1.681.199"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-gray-500 hover:text-gray-800"
        >
          <path
            fill="currentColor"
            d="M2.984 8.625v.003a.5.5 0 0 1-.612.355c-.431-.114-.355-.611-.355-.611l.018-.062s.026-.084.047-.145a6.7 6.7 0 0 1 1.117-1.982C4.096 5.089 5.605 4 8 4s3.904 1.089 4.802 2.183a6.7 6.7 0 0 1 1.117 1.982a4 4 0 0 1 .06.187l.003.013v.004l.001.002a.5.5 0 0 1-.966.258l-.001-.004l-.008-.025l-.035-.109a5.7 5.7 0 0 0-.945-1.674C11.286 5.912 10.045 5 8 5s-3.285.912-4.028 1.817a5.7 5.7 0 0 0-.945 1.674l-.035.109zM8 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
          />
        </svg>
      )}
    </button>
  </div>
  {/* Lupa Kata Sandi */}
  <div className="mt-1 text-right">
    <a href="#" className="text-sm text-blue-600 hover:underline">
      Lupa Kata Sandi?
    </a>
  </div>
</div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md py-2 mt-2 hover:from-blue-600 hover:to-blue-700 focus:ring focus:ring-blue-200"
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
        </div>
      </motion.div>
    </div>
  );
}

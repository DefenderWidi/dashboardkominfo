import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('./loginbackground.png')",
      }}
    >
       <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-2xl p-10 w-full max-w-md sm:max-w-lg">
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
      <div className="relative mt-1">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white text-black border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2 pl-10"
          placeholder="Masukkan email Anda"
          required
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-gray-700 font-medium"
      >
        Kata Sandi
      </label>
      <div className="relative mt-1">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white text-black border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2 pl-10"
          placeholder="Masukkan kata sandi Anda"
          required
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
            />
          </svg>
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md py-2 mt-4 hover:from-blue-600 hover:to-blue-700 focus:ring focus:ring-blue-200"
    >
      Login
    </button>
  </form>

  {/* Footer */}
  <div className="mt-6 text-center">
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

import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Captcha from "./captcha";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch(new URL("/auth", window.location.origin).toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, mode: "login" }), // Tambahkan 'mode: login'
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Login berhasil! Mengarahkan Anda ke halaman utama...", {
          duration: 2500,
        });
        document.cookie = `isAuthenticated=true; path=/; max-age=3600`;
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      } else {
        toast.error(data.error || "Terjadi kesalahan. Coba lagi.", {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Gagal terhubung ke server. Coba lagi nanti.", {
        duration: 3000,
      });
    }
  };
  
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Kata sandi dan ulangi kata sandi tidak cocok!", {
        duration: 3000,
      });
      return;
    }
  
    try {
      const response = await fetch(new URL("/auth", window.location.origin).toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, mode: "register" }), // Tambahkan 'mode: register'
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Akun berhasil dibuat! Silakan login.", {
          duration: 3000,
        });
        setIsSignUp(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        toast.error(data.error || "Terjadi kesalahan. Coba lagi.", {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Gagal terhubung ke server. Coba lagi nanti.", {
        duration: 3000,
      });
    }
  };  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-3 sm:px-6"
      style={{
        backgroundImage: "url('./loginbackground.png')",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        key={isSignUp ? "sign-up" : "login"}
        className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Foto Header */}
        <div className="flex justify-center -mt-7 mb-3 sm:mb-3">
          <img src="./fotoheader.png" alt="Header" className="w-18 h-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#01458e] -mt-5 mb-2 sm:mb-3">
          {isSignUp ? "Buat Akun Baru" : "Selamat Datang Kembali!"}
        </h2>

        {/* Form Login atau Sign Up */}
        <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black border border-gray-400 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div className="mb-3 sm:mb-4 relative">
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
                className="w-full bg-white text-black border border-gray-400 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
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
                    width="20"
                    height="20"
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
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <path
                      fill="currentColor"
                      d="M2.984 8.625v.003a.5.5 0 0 1-.612.355c-.431-.114-.355-.611-.355-.611l-.018-.062s.026-.084.047-.145a6.7 6.7 0 0 1 1.117-1.982C4.096 5.089 5.605 4 8 4s3.904 1.089 4.802 2.183a6.7 6.7 0 0 1 1.117 1.982a4 4 0 0 1 .06.187l.003.013v.004l.001.002a.5.5 0 0 1-.966.258l-.001-.004l-.008-.025l-.035-.109a5.7 5.7 0 0 0-.945-1.674C11.286 5.912 10.045 5 8 5s-3.285.912-4.028 1.817a5.7 5.7 0 0 0-.945 1.674l-.035.109zM8 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Lupa Kata Sandi (Hanya untuk Login) */}
            {!isSignUp && (
              <div className="mt-1 text-right">
                <a href="#" className="text-sm text-[#01458e] hover:underline">
                  Lupa Kata Sandi?
                </a>
              </div>
            )}
          </div>

         {/* Ulangi Kata Sandi (Hanya untuk Sign Up) */}
{isSignUp && (
  <div className="mb-3 sm:mb-4 relative">
    <label
      htmlFor="confirm-password"
      className="block text-gray-700 font-medium"
    >
      Ulangi Kata Sandi
    </label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full bg-white text-black border border-gray-400 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
        placeholder="Ulangi kata sandi Anda"
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
            width="20"
            height="20"
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
            width="20"
            height="20"
            viewBox="0 0 16 16"
            className="text-gray-500 hover:text-gray-800"
          >
            <path
              fill="currentColor"
              d="M2.984 8.625v.003a.5.5 0 0 1-.612.355c-.431-.114-.355-.611-.355-.611l-.018-.062s.026-.084.047-.145a6.7 6.7 0 0 1 1.117-1.982C4.096 5.089 5.605 4 8 4s3.904 1.089 4.802 2.183a6.7 6.7 0 0 1 1.117 1.982a4 4 0 0 1 .06.187l.003.013v.004l.001.002a.5.5 0 0 1-.966.258l-.001-.004l-.008-.025l-.035-.109a5.7 5.7 0 0 0-.945-1.674C11.286 5.912 10.045 5 8 5s-3.285.912-4.028 1.817a5.7 5.7 0 0 0-.945 1.674l-.035.109zM8 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
            />
          </svg>
        )}
      </button>
    </div>
  </div>
)}

    {/* CAPTCHA hanya muncul saat mode login */}
{!isSignUp && (
  <div className="mb-3">
    <Captcha onVerify={(isValid) => setCaptchaVerified(isValid)} />
  </div>
)}

{/* Button Login atau Sign Up */}
<button
  type="submit"
  className={`w-full bg-gradient-to-r from-[#0792db] to-[#01458e] text-white font-medium rounded-md py-2 sm:py-3 mt-2 sm:mt-3 ${
    (!isSignUp && !captchaVerified) ? "opacity-50 cursor-not-allowed" : "hover:from-[#01458e] hover:to-[#0792db] focus:ring focus:ring-blue-200"
  } transition-all duration-300`}
  disabled={!isSignUp && !captchaVerified}
>
  {isSignUp ? "Daftar" : "Login"}
</button>
        </form>

        {/* Footer */}
        <div className="-mb-2 mt-3 sm:mt-4 text-center space-y-1 sm:space-y-2">
          <p className="text-sm text-gray-700">
            {isSignUp ? (
              <>
                Sudah punya akun?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-[#01458e] hover:underline"
                >
                  Login di sini
                </button>
              </>
            ) : (
              <>
                Belum punya akun?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-[#01458e] hover:underline"
                >
                  Buat di sini
                </button>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

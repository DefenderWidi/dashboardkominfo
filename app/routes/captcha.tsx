import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

export default function Captcha({ onVerify }: { onVerify: (isValid: boolean) => void }) {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleVerify = () => {
    if (input === captcha) {
      toast.success("CAPTCHA benar! Silakan Login", { icon: undefined }); // Memastikan ikon default muncul
      onVerify(true);
    } else {
      toast.error("CAPTCHA salah! Coba lagi.", { icon: undefined }); // Memastikan ikon default muncul
      onVerify(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toaster untuk menampilkan notifikasi */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Captcha Box + Reload Button */}
      <div className="flex items-center justify-between bg-white border border-gray-400 rounded-md px-3 py-2">
        <span className="text-xl font-bold tracking-widest text-black">{captcha}</span>
        <button
          type="button"
          onClick={() => {
            setCaptcha(generateCaptcha());
            setInput(""); // Reset input ketika captcha diperbarui
            toast("CAPTCHA telah diperbarui", { icon: "🔄" });
          }}
          className="text-[#01458e] text-sm hover:underline"
        >
          Reload
        </button>
      </div>

     {/* Input Captcha + Verify Button */}
<div className="flex items-center mt-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Masukan Captcha"
    className="w-full bg-white border border-gray-400 rounded-l-md px-3 py-2 text-black focus:ring focus:ring-blue-200 h-[42px]"
  />
  <button
    type="button"
    onClick={handleVerify}
    className="bg-gradient-to-r from-[#0792db] to-[#01458e] hover:from-[#01458e] hover:to-[#0792db] text-white px-4 rounded-r-md hover:bg-blue-700 flex items-center justify-center"
    style={{ height: "42px" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" />
    </svg>
  </button>
</div>
    </div>
  );
}

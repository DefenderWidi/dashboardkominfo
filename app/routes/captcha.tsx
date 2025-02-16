import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

/**
 * Generates a random 6-character CAPTCHA string
 * Contains mix of uppercase, lowercase letters and numbers
 * @returns {string} Random CAPTCHA string
 */
const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

/**
 * CAPTCHA Component
 * Renders a CAPTCHA verification system with canvas drawing and user input validation
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onVerify - Callback function triggered on CAPTCHA verification
 */
export default function Captcha({ onVerify }: { onVerify: (isValid: boolean) => void }) {
  // State management for CAPTCHA and user input
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw CAPTCHA whenever it changes
  useEffect(() => {
    drawCaptcha();
  }, [captcha]);

  /**
   * Draws the CAPTCHA text on canvas with security features
   * Includes background noise and random lines for added security
   */
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear previous content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add background
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Configure text style
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#01458e";
    
    // Draw CAPTCHA characters with random positioning
    for (let i = 0; i < captcha.length; i++) {
      const x = 15 + i * 20 + Math.random() * 5; // Random horizontal position
      const y = 25 + Math.random() * 5; // Random vertical position
      ctx.fillText(captcha[i], x, y);
    }

    // Add security lines
    ctx.strokeStyle = "#01458e";
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  };

  /**
   * Verifies user input against CAPTCHA
   * Shows success/error toast messages
   */
  const handleVerify = () => {
    if (input === captcha) {
      toast.success("CAPTCHA benar! Silakan Login");
      onVerify(true);
    } else {
      toast.error("CAPTCHA salah! Coba lagi.");
      onVerify(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toast notifications container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* CAPTCHA canvas container */}
      <div className="flex items-center justify-between bg-white border border-gray-400 rounded-md px-3 py-2">
        <canvas ref={canvasRef} width={150} height={40} className="bg-gray-100 rounded" />
        <button
          type="button"
          onClick={() => {
            setCaptcha(generateCaptcha());
            setInput(""); // Reset input on CAPTCHA refresh
            toast("CAPTCHA telah diperbarui", { icon: "🔄" });
          }}
          className="text-[#01458e] text-sm hover:underline"
        >
          Reload
        </button>
      </div>

      {/* User input and verification section */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Masukkan Captcha"
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
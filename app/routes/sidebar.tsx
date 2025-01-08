import { useState } from "react";
import { HomeIcon, ChartBarIcon } from "@heroicons/react/outline"; // Heroicons v1

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol Hamburger untuk Layar Kecil */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-md shadow-md"
        >
          <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-700"></span>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-64 bg-white shadow-md p-4 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:flex lg:min-h-screen overflow-y-auto transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Sidebar */}
          <div className="flex items-center justify-center mb-2">
            <img
              src="/fotoheader.png" // Path ke logo baru
              alt="Logo"
              className="w-50 h-50 object-contain" // Sesuaikan ukuran logo
            />
          </div>

          {/* Menu Navigasi */}
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-gray-700 hover:text-blue-500"
                >
                  <HomeIcon className="w-6 h-6" /> {/* Icon Home */}
                  <span className="ml-2">Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="/executiveSummary"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-gray-700 hover:text-blue-500"
                >
                  <ChartBarIcon className="w-6 h-6" /> {/* Icon Dashboard */}
                  <span className="ml-2">Executive Summary</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay untuk Menutup Sidebar di Layar Kecil */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
}

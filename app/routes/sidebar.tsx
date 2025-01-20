import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "@remix-run/react";
import { HomeIcon, ChartBarIcon, SearchIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sheets, setSheets] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Tambah sheet baru
  const addSheet = () => {
    const newSheetName = `Sheet ${sheets.length + 1}`;
    setSheets((prevSheets) => [...prevSheets, newSheetName]);
  };

  // Hapus sheet berdasarkan index
  const removeSheet = (index: number) => {
    if (sheets.length === 1) {
      setShowPopup(true); // Tampilkan popup jika hanya ada satu sheet
      return;
    }

    setSheets((prevSheets) => {
      const updatedSheets = prevSheets.filter((_, i) => i !== index);

      // Cek apakah sheet yang sedang aktif dihapus
      const currentSheet = location.pathname.split("/").pop(); // Ambil nama sheet dari URL
      if (prevSheets[index] === currentSheet) {
        if (updatedSheets.length > 0) {
          navigate(`/executiveSummary/${updatedSheets[0]}`); // Pindah ke sheet pertama yang tersisa
        }
      }

      return updatedSheets;
    });
  };

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
              src="/fotoheader.png"
              alt="Logo"
              className="w-50 h-50 object-contain"
            />
          </div>

          {/* Menu Navigasi */}
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-[#29166e] text-white"
                        : "text-[#29166e] hover:text-blue-500 hover:ring hover:ring-[#29166e]"
                    }`
                  }
                >
                  <HomeIcon className="w-6 h-6" />
                  <span className="ml-2">Overview</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-[#29166e] text-white"
                        : "text-[#29166e] hover:text-blue-500 hover:ring hover:ring-[#29166e]"
                    }`
                  }
                >
                  <SearchIcon className="w-6 h-6" />
                  <span className="ml-2">Pencarian Data</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/executiveSummary/${sheets[0] || "Sheet1"}`}
                  onClick={() => {
                    if (sheets.length === 0) {
                      setSheets(["Sheet1"]); // Tambahkan Sheet1 jika tidak ada sheet
                    }
                    setIsOpen(false); // Tutup sidebar
                  }}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-md transition-all duration-300 ${
                      location.pathname.includes("/executiveSummary") || isActive
                        ? "bg-[#29166e] text-white"
                        : "text-[#29166e] hover:text-blue-500 hover:ring hover:ring-[#29166e]"
                    }`
                  }
                >
                  <ChartBarIcon className="w-6 h-6" />
                  <span className="ml-2">Executive Summary</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Daftar Sheets */}
          <nav className="mt-4">
            <ul className="space-y-2">
              {sheets.map((sheet, index) => (
                <li key={index} className="flex items-center justify-between">
                  <NavLink
                    to={`/executiveSummary/${sheet}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex-grow p-2 rounded-md transition-all duration-300 ${
                        isActive
                          ? "bg-[#29166e] text-white"
                          : "text-[#29166e] hover:text-blue-500 hover:ring hover:ring-[#29166e]"
                      }`
                    }
                  >
                    {sheet}
                  </NavLink>
                  <button
                    onClick={() => removeSheet(index)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tambah Sheet */}
          <div className="mt-4">
            <button
              onClick={addSheet}
              className="flex items-center justify-center w-full text-[#29166e] p-2 rounded-md hover:bg-blue-200 transition-all duration-300"
            >
              <PlusCircleIcon className="w-6 h-6 mr-2" />
              Tambah Sheet
            </button>
          </div>
        </div>
      </aside>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-4">Tidak Bisa Menghapus</h2>
            <p className="text-gray-700 mb-4">Anda tidak bisa menghapus sheet terakhir.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      )}

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

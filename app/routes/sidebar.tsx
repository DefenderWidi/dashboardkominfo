import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "@remix-run/react";
import { HomeIcon, ChartBarIcon, SearchIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sheets, setSheets] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [isSheetsInitialized, setIsSheetsInitialized] = useState(false); // Untuk menampilkan tombol tambah sheet
  const navigate = useNavigate();
  const location = useLocation();

  // Tambah sheet baru
  const addSheet = () => {
    const newSheetName = `Sheet ${sheets.length + 1}`;
    setSheets((prevSheets) => [...prevSheets, newSheetName]);
  };

  // Konfirmasi hapus sheet
  const confirmDeleteSheet = (index: number) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };

  // Hapus sheet setelah konfirmasi
  const removeSheet = () => {
    if (deleteIndex === null) return;

    if (sheets.length === 1) {
      setShowPopup(true); // Tampilkan popup jika hanya ada satu sheet
      setShowDeleteConfirm(false); // Tutup konfirmasi
      return;
    }

    setSheets((prevSheets) => {
      const updatedSheets = prevSheets.filter((_, i) => i !== deleteIndex);

      // Cek apakah sheet yang sedang aktif dihapus
      const currentSheet = location.pathname.split("/").pop(); // Ambil nama sheet dari URL
      if (prevSheets[deleteIndex] === currentSheet) {
        if (updatedSheets.length > 0) {
          navigate(`/executiveSummary/${updatedSheets[0]}`); // Pindah ke sheet pertama yang tersisa
        }
      }

      return updatedSheets;
    });

    setShowDeleteConfirm(false); // Tutup modal konfirmasi
    setDeleteIndex(null); // Reset indeks yang akan dihapus
  };

  // Inisialisasi sheets ketika klik Executive Summary
  const handleExecutiveSummaryClick = () => {
    if (!isSheetsInitialized) {
      setSheets(["Sheet1"]);
      setIsSheetsInitialized(true); // Pastikan tidak diinisialisasi ulang
    }
    setIsOpen(false); // Tutup sidebar
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
            onClick={handleExecutiveSummaryClick}
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
    {isSheetsInitialized && (
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
                onClick={() => confirmDeleteSheet(index)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )}

    {/* Tambah Sheet */}
    {isSheetsInitialized && (
      <div className="mt-3 flex justify-center">
        <button
          onClick={addSheet}
          className="flex items-center px-3 py-1 text-[#29166e] rounded-md hover:bg-blue-200 transition-all duration-300"
          title="Tambah Sheet"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          <span className="text-sm">Tambah Sheet</span>
        </button>
      </div>
    )}

    {/* Spacer untuk menjaga layout */}
    <div className="flex-grow"></div>

    {/* Tombol Logout */}
    <div className="mt-4">
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          navigate("/login", { replace: true });
        }}
        className="flex items-center w-full p-2 text-red-600 hover:bg-red-100 rounded-md transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16 13v-2H7V8l-5 4l5 4v-3h9z" />
          <path d="M19 3H9a1 1 0 0 0 0 2h10v14H9a1 1 0 1 0 0 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>
        <span className="ml-2">Keluar</span>
      </button>
    </div>
  </div>
</aside>
  

      {/* Modal Konfirmasi Hapus */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-4">Konfirmasi Hapus</h2>
            <p className="text-gray-700 mb-4">
              Apakah Anda yakin ingin menghapus sheet ini?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={removeSheet}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Hapus
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

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

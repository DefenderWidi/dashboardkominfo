import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "@remix-run/react";
import { HomeIcon, ChartBarIcon, SearchIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sheets, setSheets] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showEmptyNameModal, setShowEmptyNameModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [renameIndex, setRenameIndex] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState("");
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
      setIsSheetsInitialized(true);
    }
    setIsOpen(false);
  };

  // Fungsi untuk memulai rename
  const startRename = (index: number, currentName: string) => {
    setRenameIndex(index);
    setRenameValue(currentName);
  };

  // Fungsi untuk menyimpan rename
  const saveRename = (index: number) => {
    setSheets((prevSheets) =>
      prevSheets.map((sheet, i) => (i === index ? renameValue : sheet))
    );
    setRenameIndex(null);
    setRenameValue("");
  };

  // Fungsi untuk membatalkan rename
  const cancelRename = () => {
    setRenameIndex(null);
    setRenameValue("");
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
              : "text-[#29166e] hover:bg-blue-100"
          }`
        }
      >
        <HomeIcon className="w-6 h-6" strokeWidth="2.5" /> 
        <span className="ml-3 font-bold">Beranda</span>
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
              : "text-[#29166e] hover:bg-blue-100"
          }`
        }
      >
        <SearchIcon className="w-6 h-6" strokeWidth="2.5" />
        <span className="ml-3 font-bold">Pencarian Data</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/executiveSummary/${sheets[0] || "Sheet1"}`}
        onClick={handleExecutiveSummaryClick}
        className={() =>
          `flex items-center p-2 rounded-md transition-all duration-300 ${
            location.pathname.includes("/executiveSummary")
              ? "bg-[#29166e] text-white"
              : "text-[#29166e] hover:bg-blue-100"
          }`
        }
      >
        <ChartBarIcon className="w-6 h-6" strokeWidth="2.5" />
        <span className="ml-3 font-bold">Executive Summary</span>
      </NavLink>
    </li>
  </ul>
</nav>

{/* Daftar Sheets */}
{isSheetsInitialized && (
  <nav className="mt-1">
    <ul className="space-y-0.1">
      {sheets.map((sheet, index) => (
        <li
          key={index}
          className="flex items-center justify-between py-0.5"
        >
          {renameIndex === index ? (
            /* Input rename */
            <div className="flex-grow flex items-center space-x-1">
              <input
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                className="w-full px-2 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                style={{ height: "2.5rem" }}
              />
            </div>
          ) : (
            /* Nama sheet */
            <NavLink
              to={`/executiveSummary/${sheet}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex-grow w-full px-2 py-1 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#29166e] text-white"
                    : "text-[#29166e] hover:bg-blue-100"
                }`
              }
              style={{
                height: "2.5rem", // tinggi konsisten
                display: "flex",
                alignItems: "center", // Posisi teks vertikal rata tengah
              }}
              title={sheet}
            >
              {sheet.length > 15 ? `${sheet.substring(0, 15)}...` : sheet}
            </NavLink>
          )}
          {/* Tombol Aksi */}
          <div className="flex items-center space-x-[2px]"> {/* Mengurangi jarak antara tombol */}
            {renameIndex === index ? (
              <>
              <button
  onClick={() => {
    if (!renameValue.trim()) {
      setShowEmptyNameModal(true);
      return;
    }
    saveRename(index);
  }}
  className="h-10 px-1 hover:bg-blue-50 hover:py-2.5 rounded-md transition-all duration-300"
  title="Simpan"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#29166e"
  >
    <path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
  </svg>
</button>
                <button
  onClick={cancelRename}
  className="h-10 px-0.5 text-red-500 hover:text-red-600 hover:bg-red-50 hover:py-2.5 rounded-md transition-all duration-300"
  title="Batal"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" />
  </svg>
</button>

              </>
            ) : (
              <>
               <button
                  onClick={() => startRename(index, sheet)}
                  className="h-10 px-1 hover:bg-blue-50 rounded-md transition-all duration-300"
                  title="Rename"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#29166e"
                  >
                    <path d="M16.035 3.015a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144L9.773 19.177a1.5 1.5 0 0 1-.562.354l-.162.047l-4.454 1.028a1 1 0 0 1-1.22-1.088l.02-.113l1.027-4.455a1.5 1.5 0 0 1 .29-.598l.111-.125zm-.707 3.535l-8.99 8.99l-.636 2.758l2.758-.637l8.99-8.99l-2.122-2.12Zm3.536-2.121a1 1 0 0 0-1.32-.083l-.094.083l-.708.707l2.122 2.121l.707-.707a1 1 0 0 0 .083-1.32l-.083-.094z" />
                  </svg>
                </button>
                <button
                  onClick={() => confirmDeleteSheet(index)}
                  className="h-10 px-1 text-red-500 hover:text-red-600 hover:bg-red-50 hover:py-2.5 rounded-md transition-all duration-300"
                  title="Hapus"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  </nav>
)}

          {/* Tambah Sheet */}
          {isSheetsInitialized && (
            <div className="mt-0.5 flex justify-center">
          <button
  onClick={addSheet}
  className="flex items-center px-3 py-2 text-[#29166e] rounded-md hover:bg-blue-100 transition-all duration-300"
  title="Tambah Sheet"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-1"
  >
    <path d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75" />
    <path
      fill-rule="evenodd"
      d="M7.317 3.769a42.5 42.5 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a41 41 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41 41 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.4 39.4 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.4 39.4 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163"
      clip-rule="evenodd"
    />
  </svg>
  <span className="text-sm">Tambah Sheet</span>
</button>
            </div>
          )}

          {/* Spacer untuk menjaga layout */}
          <div className="flex-grow"></div>

        {/* Tombol Logout */}
<div className="mt-4">
  <button
    onClick={() => setShowLogoutConfirm(true)}
    className="flex items-center w-full p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-md transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    >
      <path d="m17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />
    </svg>
    <span className="ml-2 font-bold">Keluar</span> 
  </button>
</div>
        </div>
      </aside>

      {/* Modal Konfirmasi Logout */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-4">Keluar dari Akun</h2>
            <p className="text-gray-700 mb-5">Anda akan keluar dari akun ini. Apakah Anda yakin?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-10 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("isAuthenticated");
                  navigate("/login", { replace: true });
                }}
                className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-all duration-300"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Hapus */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-4">Hapus Sheet</h2>
            <p className="text-gray-700 mb-5">Sheet ini akan dihapus secara permanen. Apakah Anda yakin?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-10 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                Batal
              </button>
              <button
                onClick={removeSheet}
                className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-all duration-300"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Nama Kosong */}
{showEmptyNameModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
      <h2 className="text-lg font-bold text-red-600 mb-4">Nama Tidak Valid</h2>
      <p className="text-gray-700 mb-5">
        Nama sheet tidak boleh kosong. Silakan isi nama yang valid!
      </p>
      <button
        onClick={() => setShowEmptyNameModal(false)}
        className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-all duration-300"
      >
        Mengerti
      </button>
    </div>
  </div>
)}

      {/* Modal Sheets Terakhir */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-4">Aksi Tidak Dapat Dilakukan</h2>
            <p className="text-gray-700 mb-5">
              Sheet terakhir tidak dapat dihapus karena setidaknya satu sheet harus tersedia.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-all duration-300"
            >
              Mengerti
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

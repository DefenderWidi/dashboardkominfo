import { useState, useEffect } from "react";

// Definisikan tipe data dari database
type DataType = {
  id: number;
  fileName: string; // Sesuaikan dengan database
};

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Tipe string
  const [data, setData] = useState<DataType[]>([]); // Data dari database
  const [filteredData, setFilteredData] = useState<DataType[]>([]); // Data yang difilter
  const [loading, setLoading] = useState<boolean>(true); // Status loading
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data dari API saat pertama kali render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/files"); // Endpoint API dari files.ts
        if (!response.ok) throw new Error("Gagal mengambil data");

        const result: DataType[] = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (err) {
        setError("Gagal memuat data. Coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data berdasarkan input pencarian
  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        item.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      {/* Copywriting */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-[#29166e]">Pencarian Data</h1>
        <p className="text-gray-600 mt-1">
          Temukan data yang Anda butuhkan dengan cepat dan mudah
        </p>
      </div>

      {/* Search Box */}
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#01458e] rounded-lg bg-gray-50 focus:ring-[#01458e] focus:border-[#01458e]"
            placeholder="Cari file..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>

      {/* Status Loading atau Error */}
      {loading && <p className="text-center text-gray-500 mt-4">Memuat data...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Tabel Data */}
      {!loading && !error && (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#01458e] text-white">
                <th className="py-2 px-4 text-left">No</th>
                <th className="py-2 px-4 text-left">Nama File</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-t border-gray-300`}
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{item.fileName}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center py-4 text-gray-500 bg-white">
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

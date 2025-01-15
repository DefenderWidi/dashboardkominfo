import React, { useState, useEffect } from "react";

// Definisikan tipe data
type DataType = {
  id: number;
  name: string;
};

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Tipe string
  const [data, setData] = useState<DataType[]>([]); // Tipe array dengan struktur DataType
  const [filteredData, setFilteredData] = useState<DataType[]>([]); // Sama seperti data

  // Dummy data
  const dummyData: DataType[] = [
    { id: 1, name: "File A" },
    { id: 2, name: "File B" },
    { id: 3, name: "File C" },
  ];

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      setData(dummyData);
    }, 1000); // Simulate delay
  }, []);

  useEffect(() => {
    // Filter data based on search term
    if (searchTerm) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
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
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#01458e] rounded-lg bg-gray-50 focus:ring-[#01458e] focus:border-[#01458e]"
            placeholder="Cari file..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#01458e] hover:bg-[#01346b] focus:ring-4 focus:outline-none focus:ring-[#01458e] font-medium rounded-lg text-sm px-4 py-2"
            onClick={(e) => e.preventDefault()} // Prevent page reload
          >
            Search
          </button>
        </div>
      </form>

      {/* Tabel Data */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
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
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center py-4 text-gray-500">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

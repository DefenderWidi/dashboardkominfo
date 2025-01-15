import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // Anda dapat memanggil fungsi pencarian atau filter di sini
    console.log("Search Query:", event.target.value);
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold text-gray-800">Pencarian Data</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Cari data..."
        className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
}

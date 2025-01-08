export default function Overview() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-6">Welcome to Diskominfo Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Jelajahi fitur dengan menggunakan menu di sebelah kiri.
      </p>
      {/* Tambahkan Gambar */}
      <div className="mt-6">
        <img
          src="/herokabsemarang.png" // Path ke gambar di folder public
          alt="Hero Kabupaten Semarang"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

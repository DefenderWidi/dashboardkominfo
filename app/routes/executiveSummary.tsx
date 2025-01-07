import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";
  
  export default function executiveSummary() {
    const lineData = [
      { name: "Mon", value: 10 },
      { name: "Tue", value: 20 },
      { name: "Wed", value: 30 },
      { name: "Thu", value: 40 },
      { name: "Fri", value: 50 },
      { name: "Sat", value: 60 },
    ];
  
    const pieData = [
      { name: "Kota Semarang", value: 400 },
      { name: "Kab. Semarang", value: 300 },
      { name: "Salatiga", value: 300 },
      { name: "Demak", value: 200 },
    ];
  
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];
  
    const tableData = [
      { category: "Senin (Mon)", status: "Pengguna Baru", count: 10 },
      { category: "Selasa (Tue)", status: "Pengguna Baru", count: 20 },
      { category: "Rabu (Wed)", status: "Pengguna Baru", count: 30 },
      { category: "Kamis (Thu)", status: "Pengguna Baru", count: 40 },
      { category: "Jumat (Fri)", status: "Pengguna Baru", count: 50 },
      { category: "Sabtu (Sat)", status: "Pengguna Baru", count: 60 },
    ];
  
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 mt-6">Executive Summary</h1>
  
        {/* Statistik Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-600">Pengguna Terlibat</h3>
            <p className="text-2xl font-bold text-gray-800">$150,50</p>
            <span className="text-sm text-green-500">+65.32%</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-600">Analitik Postingan</h3>
            <p className="text-2xl font-bold text-gray-800">$924,74</p>
            <span className="text-sm text-red-500">-10.24%</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-600">Impresi Halaman</h3>
            <p className="text-2xl font-bold text-gray-800">4678</p>
            <span className="text-sm text-green-500">+75.56%</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-600">Halaman Tidak Disukai</h3>
            <p className="text-2xl font-bold text-gray-800">235</p>
            <span className="text-sm text-red-500">-24.32%</span>
          </div>
        </div>
  
        {/* Grafik Audience Growth */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Pertumbuhan Audiens</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Grafik PieChart */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Pengguna Baru Berdasarkan Daerah</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
  
        {/* Tabel Laporan */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <h3 className="text-lg font-bold mb-4 text-center">Tabel Data</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="p-2 text-left">Hari</th>
                <th className="p-2 text-left">Jenis Pengguna</th>
                <th className="p-2 text-left">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="p-2">{row.category}</td>
                  <td className="p-2">{row.status}</td>
                  <td className="p-2">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
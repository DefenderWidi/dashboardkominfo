/**
 * Executive Summary Component
 * 
 * A comprehensive dashboard component that allows users to:
 * - Upload and analyze up to 3 Excel files
 * - Visualize data through multiple chart types (Line, Bar, Pie)
 * - View data in tabular format
 * - Maintain upload history
 * 
 * @component
 * @param {Object} props
 * @param {string} [props.sheetName] - Optional name of the sheet to be displayed
 */

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import {
  LineChart,
  BarChart,
  Bar,
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

export default function ExecutiveSummary({ sheetName }: { sheetName?: string }) {
  const [fileData, setFileData] = useState<
    {
      headers: string[];
      tableData: (string | number | null)[][];
      chartData: { name: string; value: number }[];
      xAxis: string;
      yAxis: string;
    }[]
  >([]);

  const [history, setHistory] = useState<string[]>([]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  useEffect(() => {
    const storedHistory = localStorage.getItem("uploadHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadHistory", JSON.stringify(history));
  }, [history]);

  const [showModal, setShowModal] = useState(false);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    if (fileData.length >= 3) {
      setShowModal(true);
      return;
    }  

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData.length > 0) {
          const [headerRow, ...rows] = jsonData;
          const parsedRows = rows.map((row: any[]) =>
            row.map((cell) =>
              !isNaN(Number(cell)) && cell !== null && cell !== undefined
                ? parseFloat(cell.toString())
                : cell
            )
          );

          const defaultXAxis = headerRow[0];
          const defaultYAxis =
            headerRow.find((_: string, index: number) =>
              parsedRows.some((row) => typeof row[index] === "number")
            ) || headerRow[1];

          const xIndex = headerRow.indexOf(defaultXAxis);
          const yIndex = headerRow.indexOf(defaultYAxis);

          const initialChartData = parsedRows
            .filter(
              (row) =>
                row[xIndex] !== undefined &&
                row[yIndex] !== undefined &&
                typeof row[yIndex] === "number"
            )
            .map((row) => ({
              name: String(row[xIndex]),
              value: Number(row[yIndex]),
            }));

          setFileData((prev) => [
            ...prev,
            {
              headers: headerRow as string[],
              tableData: parsedRows,
              chartData: initialChartData,
              xAxis: defaultXAxis,
              yAxis: defaultYAxis,
            },
          ]);
          setHistory((prev) => [...prev, file.name]);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const updateChartData = (index: number, xAxis: string, yAxis: string) => {
    setFileData((prev) => {
      const newData = [...prev];
      const { headers, tableData } = newData[index];
      const xIndex = headers.indexOf(xAxis);
      const yIndex = headers.indexOf(yAxis);

      const chartData = tableData
        .filter(
          (row) =>
            row[xIndex] !== undefined &&
            row[yIndex] !== undefined &&
            typeof row[yIndex] === "number"
        )
        .map((row) => ({
          name: String(row[xIndex]),
          value: Number(row[yIndex]),
        }));

      newData[index] = { ...newData[index], xAxis, yAxis, chartData };
      return newData;
    });
  };

  const removeFile = (index: number) => {
    setFileData((prev) => {
      const newData = prev.filter((_, i) => i !== index);
      return newData;
    });
  
    setHistory((prev) => {
      const newHistory = prev.filter((_, i) => i !== index);
      localStorage.setItem("uploadHistory", JSON.stringify(newHistory));
      return newHistory;
    });
  };
  

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-md">
      {/* Copywriting */}
      <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-[#29166e]">
  {sheetName ? `Executive Summary for ${sheetName}` : "Executive Summary"}
</h1>
        <p className="text-gray-600 mt-1">
          Dashboard ini membantu Anda memahami data secara cepat. Unggah hingga tiga file Excel untuk mendapatkan wawasan melalui tabel dan grafik interaktif.
        </p>
      </div>

      {/* Upload File Section */}
      <form className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg border border-gray-300">
        <label
          htmlFor="multiple_files"
          className="block text-sm font-medium text-black mb-2"
        >
          Upload Excel Files (Max 3)
        </label>
        <input
          id="multiple_files"
          type="file"
          multiple
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm text-black border border-gray-800 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#01458e] focus:border-[#01458e] hover:bg-gray-300"
        />
        <p className="mt-2 text-sm text-gray-600">
          File yang diterima: <span className="font-medium">.xlsx</span>
        </p>
      </form>

     {/* History Section */}
<div className="mt-6">
  <h2 className="text-xl font-semibold text-[#29166e]">Riwayat File</h2>
  <div className="mt-2 max-h-28 overflow-y-auto border border-gray-300 rounded-md p-2">
    <ul className="list-disc pl-5 text-gray-700">
      {history.slice(-3).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>

     {/* Display Files */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {fileData.map((file, index) => (
    <div
      key={index}
      className="bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#29166e]">
          {history[index] 
            ? history[index].length > 20 
              ? history[index].slice(0, 20) + "..."
              : history[index]
            : `File ${index + 1}`}
        </h3>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => removeFile(index)}
        >
          Hapus
        </button>
      </div>

            {/* Dropdowns for Axis */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 font-medium text-[#29166e]">
                  Sumbu X
                </label>
                <select
                  value={file.xAxis}
                  onChange={(e) =>
                    updateChartData(index, e.target.value, file.yAxis)
                  }
                  className="block w-full text-sm bg-white text-[#29166e] border border-[#29166e] rounded-lg focus:outline-none py-2 px-1"
                >
                  {file.headers.map((header, idx) => (
                    <option key={idx} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#29166e]">
                  Sumbu Y
                </label>
                <select
                  value={file.yAxis}
                  onChange={(e) =>
                    updateChartData(index, file.xAxis, e.target.value)
                  }
                  className="block w-full text-sm bg-white text-[#29166e] border border-[#29166e] rounded-lg focus:outline-none py-2 px-1"
                >
                  {file.headers.map((header, idx) => (
                    <option key={idx} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Charts */}
            {file.chartData.length > 0 && (
              <div className="grid grid-cols-1 gap-4">
                {/* Line Chart */}
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={file.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#01458e" />
                  </LineChart>
                </ResponsiveContainer>

                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={file.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#01458e" />
                  </BarChart>
                </ResponsiveContainer>

                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={file.chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                    >
                      {file.chartData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

           {/* Table */}
           <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#01458e] text-white">
                    {file.headers.map((header, idx) => (
                      <th key={idx} className="p-2 text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {file.tableData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`${
                        rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      )}
      {/* Modal Peringatan Maksimal Upload */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
      <h2 className="text-lg font-bold text-red-600 mb-4">Batas Maksimal File Tercapai</h2>
      <p className="text-gray-700 mb-5">
        Anda hanya dapat mengunggah hingga 3 file. Hapus salah satu jika ingin mengganti.
      </p>
      <button
        onClick={() => setShowModal(false)}
        className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-all duration-300"
      >
        Mengerti
      </button>
    </div>
  </div>
)}
    </div>
  ))}
</div>
    </div>
  );
}
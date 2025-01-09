import React, { useState } from "react";
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

export default function ExecutiveSummary() {
  const [fileData, setFileData] = useState<
    {
      headers: string[];
      tableData: (string | number | null)[][];
      chartData: { name: string; value: number }[];
      xAxis: string;
      yAxis: string;
    }[]
  >([]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    if (fileData.length >= 3) {
      alert("Maksimal 3 file dapat diunggah.");
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
        }
      };
      reader.readAsBinaryString(file);
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
    setFileData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2 mt-6 text-[#29166e]">
        Executive Summary
      </h1>
      <p className="text-base text-gray-700 mb-6">
        Dashboard ini dirancang untuk membantu Anda memahami data dengan cepat
        dan efisien. Unggah hingga tiga file Excel untuk mengubah data menjadi
        wawasan melalui tabel dan visualisasi grafik.
      </p>

{/* Upload File */}
<div className="mb-6">
  <label
    className="block mb-2 text-sm font-medium text-[#29166e]"
    htmlFor="multiple_files"
  >
    Upload Excel Files (Max 3)
  </label>
  <input
    id="multiple_files"
    type="file"
    multiple
    accept=".xlsx, .xls"
    onChange={handleFileUpload}
    className="block w-full text-sm text-[#29166e] border border-[#29166e] rounded-lg cursor-pointer bg-[#e6f0ff] focus:outline-none hover:bg-[#d6e8ff]"
  />
  <p className="mt-2 text-sm text-gray-500">
    File yang diterima: <span className="font-medium text-[#29166e]">.xlsx</span>
  </p>
</div>

      {/* Display Files */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {fileData.map((file, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#29166e]">File {index + 1}</h3>
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
                        <Cell
                          key={`cell-${idx}`}
                          fill={COLORS[idx % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

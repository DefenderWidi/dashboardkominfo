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
import { ChartPieIcon, TableIcon } from "@heroicons/react/solid"; // Heroicons for Icons

export default function ExecutiveSummary() {
  const [tableData, setTableData] = useState<(string | number | null)[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [xAxis, setXAxis] = useState<string>("");
  const [yAxis, setYAxis] = useState<string>("");
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    []
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

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

        setHeaders(headerRow as string[]);
        setTableData(parsedRows);
        setXAxis(headerRow[0]);
        setYAxis(
          headerRow.find((_: string, index: number) =>
            parsedRows.some((row) => typeof row[index] === "number")
          ) || headerRow[1]
        );
      }
    };
    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    if (!xAxis || !yAxis) return;

    const xIndex = headers.indexOf(xAxis);
    const yIndex = headers.indexOf(yAxis);

    const data = tableData
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
    setChartData(data);
  }, [xAxis, yAxis, tableData]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2 mt-6 text-[#29166e]">Executive Summary</h1>
      <p className="text-base text-gray-700 mb-6">
        Dashboard ini dirancang untuk membantu Anda memahami data dengan cepat dan efisien. Unggah file Excel Anda untuk mengubah data menjadi wawasan yang mudah dipahami melalui tabel dan visualisasi grafik.
      </p>
      
      {/* Upload File */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-[#29166e]">
          Upload Excel File
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm text-[#29166e] border border-[#29166e] rounded-lg cursor-pointer focus:outline-none"
        />
      </div>

      {/* Dropdowns for Chart Configuration */}
      {headers.length > 0 && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-[#29166e]">
              Sumbu X (Axis 1)
            </label>
            <select
              value={xAxis}
              onChange={(e) => setXAxis(e.target.value)}
             className="block w-full text-sm bg-white text-#29166e border border-[#29166e] rounded-lg focus:outline-none py-2 px-1"
            >
              {headers.map((header, index) => (
                <option key={index} value={header}>
                  {header}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#29166e]">
              Sumbu Y (Axis 2)
            </label>
            <select
              value={yAxis}
              onChange={(e) => setYAxis(e.target.value)}
              className="block w-full text-sm bg-white text-#29166e border border-[#29166e] rounded-lg focus:outline-none py-2 px-1"
            >
              {headers.map((header, index) => (
                <option key={index} value={header}>
                  {header}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Table and Charts in Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Table Display */}
        {tableData.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TableIcon className="w-6 h-6 text-[#29166e] mr-2" />
              <h3 className="text-lg font-bold text-[#29166e]">Tabel Data</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                <tr className="bg-[#01458e] text-white">
                    {headers.map((header, index) => (
                      <th key={index} className="p-2 text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
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

        {/* Charts */}
        {chartData.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {/* Line Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <ChartPieIcon className="w-6 h-6 text-[#29166e] mr-2" />
                <h3 className="text-lg font-bold text-[#29166e]">Grafik Line</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#01458e" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <ChartPieIcon className="w-6 h-6 text-[#29166e] mr-2" />
                <h3 className="text-lg font-bold text-[#29166e]">Grafik Bar</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#01458e" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <ChartPieIcon className="w-6 h-6 text-[#29166e] mr-2" />
                <h3 className="text-lg font-bold text-[#29166e]">Grafik Pie</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

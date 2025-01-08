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

        // Parse rows to ensure numeric values are properly handled
        const parsedRows = rows.map((row: any[]) =>
          row.map((cell) =>
            !isNaN(Number(cell)) && cell !== null && cell !== undefined
              ? parseFloat(cell.toString())
              : cell
          )
        );

        setHeaders(headerRow as string[]);
        setTableData(parsedRows);
        setXAxis(headerRow[0]); // Default X Axis
        setYAxis(
          headerRow.find((_, index) =>
            parsedRows.some((row) => typeof row[index] === "number")
          ) || headerRow[1] // Default Y Axis
        );
      }
    };
    reader.readAsBinaryString(file);
  };

  // Update chart data automatically when X or Y Axis changes
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
        name: String(row[xIndex]), // Ensure name is string
        value: Number(row[yIndex]), // Ensure value is number
      }));
    setChartData(data);
  }, [xAxis, yAxis, tableData]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 mt-6">Executive Summary</h1>

      {/* Upload File */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Upload Excel File
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
        />
      </div>

      {/* Dropdowns for Chart Configuration */}
      {headers.length > 0 && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Sumbu X (Axis 1)
            </label>
            <select
              value={xAxis}
              onChange={(e) => setXAxis(e.target.value)}
              className="block w-full text-sm bg-[#0792db] text-white border border-[#0792db] rounded-lg focus:outline-none"
            >
              {headers.map((header: string, index: number) => (
                <option key={index} value={header}>
                  {header}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Sumbu Y (Axis 2)
            </label>
            <select
              value={yAxis}
              onChange={(e) => setYAxis(e.target.value)}
              className="block w-full text-sm bg-[#0792db] text-white border border-[#0792db] rounded-lg focus:outline-none"
            >
              {headers.map((header: string, index: number) => (
                <option key={index} value={header}>
                  {header}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Table Display */}
      {tableData.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <h3 className="text-lg font-bold mb-4 text-center">Tabel Data</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-400 text-white">
                {headers.map((header: string, index: number) => (
                  <th key={index} className="p-2 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row: (string | number | null)[], rowIndex) => (
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
      )}

      {/* Charts */}
      {chartData.length > 0 && (
        <>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Grafik Line</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Grafik Bar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Grafik Pie</h3>
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
        </>
      )}
    </div>
  );
}

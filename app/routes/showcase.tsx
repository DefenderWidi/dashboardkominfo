import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Gradasi warna biru
const COLORS = ["#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1565c0"];

// Dummy data for charts
const data = [
  { name: "A", value: 40 },
  { name: "B", value: 30 },
  { name: "C", value: 20 },
  { name: "D", value: 10 },
];

const Showcase = () => {
  const [currentChart, setCurrentChart] = useState("pie");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChart((prev) => {
        if (prev === "pie") return "line";
        if (prev === "line") return "bar";
        return "pie";
      });
    }, 3000); // Change chart every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-6">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        {currentChart === "pie" && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                fill="#2196f3"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: "8px",
                  border: "none",
                }}
                itemStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}

        {currentChart === "line" && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: "8px",
                  border: "none",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#64b5f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        {currentChart === "bar" && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: "8px",
                  border: "none",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Bar dataKey="value" fill="url(#colorBar)" />
              <defs>
                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#64b5f6" />
                  <stop offset="100%" stopColor="#1565c0" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Showcase;

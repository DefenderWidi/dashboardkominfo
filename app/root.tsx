import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Sidebar from "./routes/sidebar";
import ExecutiveSummary from "./routes/executiveSummary"; // Pastikan path ini benar

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap",
  },
];

export default function Root() {
  const { sheetName } = useParams(); // Ambil parameter sheetName dari URL

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-100 text-gray-800 overflow-hidden">
        <div className="h-full flex">
          {/* Sidebar tetap di-root */}
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            {/* Render ExecutiveSummary jika sheetName ada, jika tidak gunakan Outlet */}
            {sheetName ? (
              <ExecutiveSummary sheetName={sheetName} />
            ) : (
              <Outlet />
            )}
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

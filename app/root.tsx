import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Sidebar from "./routes/sidebar";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap",
  },
];

export default function Root() {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith("/login");

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-100 text-gray-800">
        {isLoginPage ? (
          <Outlet /> // Render halaman login langsung
        ) : (
          <div className="h-full flex">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4">
              <Outlet /> {/* Render konten utama */}
            </main>
          </div>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

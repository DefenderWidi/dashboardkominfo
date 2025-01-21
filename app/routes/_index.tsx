import { useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import Overview from "./overview";

// Loader untuk validasi autentikasi
export const loader = async ({ request }: { request: Request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const isAuthenticated = cookieHeader?.includes("isAuthenticated=true");

  if (!isAuthenticated) {
    // Redirect ke login jika belum autentikasi
    throw redirect("/login");
  }

  // Kembalikan status autentikasi
  return json({ isAuthenticated: true });
};

export default function Index() {
  // Gunakan data loader untuk validasi
  useLoaderData();

  // Render halaman utama Overview
  return <Overview />;
}

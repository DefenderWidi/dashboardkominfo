import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 pt-12 lg:pt-0">{children}</main>
    </div>
  );
}

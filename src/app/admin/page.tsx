'use client'
import "./Brands.css";
import { Metadata } from "next";
import Link from "next/link";


const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 text-xl font-semibold border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <Link href="" className="block text-gray-700 hover:text-green-600">Dashboard</Link>
          <a href="#" className="block text-gray-700 hover:text-green-600">Enquiries</a>
          <Link href="admincategory" className="block text-gray-700 hover:text-green-600">Category</Link>
          <Link href="adminproduct" className="block text-gray-700 hover:text-green-600">Products</Link>
          <a href="#" className="block text-gray-700 hover:text-green-600">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Page Content */}
        <main className="px-6 py-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p>This is your admin dashboard. Use the sidebar to manage content.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;

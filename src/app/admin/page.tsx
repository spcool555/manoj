'use client'
import "./Brands.css";
import { Metadata } from "next";
import Link from "next/link";
import AdminSide from "../adminside/page";


const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     <AdminSide/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Page Content */}
        <main className="px-6 py-4">
  {/* Mobile-only warning */}
  <div className="block lg:hidden mb-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
    <p className="text-sm font-medium">
      For the best experience, please use the admin dashboard on a desktop or larger screen.
    </p>
  </div>

  <div className="hidden lg:block bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4">Overview</h2>
  <p>This is your admin dashboard. Use the sidebar to manage content.</p>
</div>

</main>

      </div>
    </div>
  );
};

export default AdminPage;

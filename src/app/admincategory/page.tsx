'use client'
import "./Brands.css";

import { useState } from "react";



const AdminCategory = () => {
  const [maincatname, setMaincatname] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maincatname.trim()) {
      alert("Category name is required!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/public/saveCategories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maincatname }),
      });

      if (response.status === 400) {
        const errorText = await response.text();
        if (errorText.trim() === "This category already present") {
          alert("Category name already exists! Please use a different name.");
        } else {
          alert(`Error: ${errorText}`);
        }
        return;
      }

      if (response.ok) {
        const data = await response.json();
        alert(`Category "${data.maincatname}" has been successfully added!`);
        setMaincatname("");
      } else {
        const errorText = await response.text();
        alert(`Error: ${errorText || "Failed to add category"}`);
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      {/* Sidebar Placeholder (You can replace with your actual component) */}
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Categories</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Categories Management</h1>
        </div>

        {/* Breadcrumb */}


        {/* Add Category Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="maincatname" className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                id="maincatname"
                name="maincatname"
                value={maincatname}
                onChange={(e) => setMaincatname(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter category name"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
            >
              Add Category
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminCategory;

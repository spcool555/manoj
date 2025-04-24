'use client'
import AdminSide from "../adminside/page";
import "./Brands.css";
import { ApiUrl } from "@/components/Api/apiurl";
import { useState } from "react";



const AdminCategory = () => {
  const [loading, setLoading] = useState(false);
  const [maincatname, setMaincatname] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maincatname.trim()) {
      alert("Category name is required!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${ApiUrl}/public/saveCategories`, {
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
    }finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      {/* Sidebar Placeholder (You can replace with your actual component) */}
      <AdminSide/>

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
              disabled={loading}
              className={`w-full flex justify-center items-center bg-teal-600 text-white py-2 px-4 rounded transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-teal-700"
              }`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              ) : null}
              {loading ? "Adding..." : "Add Category"}
            </button>

          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminCategory;

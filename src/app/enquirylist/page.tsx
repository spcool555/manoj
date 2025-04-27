'use client';
import React, { useState, useEffect, useRef } from 'react';
import AdminSide from '../adminside/page';
import { ApiUrl } from '@/components/Api/apiurl';
import * as XLSX from 'xlsx';

const EnquiryList = () => {
  const fileInputRef = useRef(null);

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of enquiries per page

  const fetchBooks = () => {
    fetch(`${ApiUrl}/public/allbooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  };

  const downloadExcel = () => {

    alert("this function activate soon")
    // const worksheet = XLSX.utils.json_to_sheet(books);
    // const workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    // XLSX.writeFile(workbook, "Enquiry_List.xlsx");
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      <AdminSide />

      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Enquiry List</h1>
          <button
            onClick={downloadExcel}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download Excel
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Enquiry List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Contact</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Product</th>
                </tr>
              </thead>
              <tbody>
                {currentBooks.map((book) => (
                  <tr key={book.id} className="border-t hover:bg-gray-50">
                    <td className="p-2 border">{book.booktitle}</td>
                    <td className="p-2 border">{book.author}</td>
                    <td className="p-2 border">{book.maincatname || 'N/A'}</td>
                    <td className="p-2 border">{book.description}</td>
                  </tr>
                ))}
                {currentBooks.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center p-4 text-gray-500">
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              Previous
            </button>

            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              Next
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default EnquiryList;

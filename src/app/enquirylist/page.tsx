'use client'
import React, { useState, useEffect, useRef } from 'react';
import AdminSide from '../adminside/page';
import { ApiUrl } from '@/components/Api/apiurl';
import * as XLSX from 'xlsx';


const EnquiryList = () => {


  const fileInputRef = useRef(null);



  const [books, setBooks] = useState([]);



  

  const fetchBooks = () => {
    fetch(`${ApiUrl}/public/allbooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  };



  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(books);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
  
    // Create and download file
    XLSX.writeFile(workbook, "Enquiry_List.xlsx");
  };
  
  useEffect(() => {
    fetchBooks();
   
  }, []);

 

 

  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      {/* Sidebar Placeholder (You can replace with your actual component) */}
      <AdminSide />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
  <h1 className="text-2xl font-bold">Enquiry List</h1>
  <button
    onClick={downloadExcel}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  >
    Download Excel
  </button>

        </div>

        {/* Breadcrumb */}



        <div className="max-w-6xl mx-auto mt-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Enquiry List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Contact</th>
                  <th className="p-2 border">Category</th> {/* 🆕 */}
                  <th className="p-2 border">Product</th>
                
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id} className="border-t hover:bg-gray-50">
                    <td className="p-2 border">{book.booktitle}</td>
                    <td className="p-2 border">{book.author}</td>
                    <td className="p-2 border">{book.maincatname || 'N/A'}</td> {/* 🆕 */}
                    <td className="p-2 border">{book.description}</td>
              
                  </tr>
                ))}
                {books.length === 0 && (
                  <tr>
                    <td className="text-center p-4 text-gray-500">
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>




      </main>
    </div>
  );
};

export default EnquiryList;

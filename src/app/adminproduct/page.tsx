'use client'
import React, { useState, useEffect, useRef } from 'react';
import AdminSide from '../adminside/page';
import { ApiUrl } from '@/components/Api/apiurl';
import Swal from 'sweetalert2';

const AdminProducts = () => {

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    booktitle: '',
    author: '',
    description: '',
    maincatname: '', // 🆕 added
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
  
    payload.append('booktitle', formData.booktitle);
    payload.append('author', formData.author);
    payload.append('description', formData.description);
    payload.append('maincatname', formData.maincatname);
    if (imageFile) {
      payload.append('imageFile', imageFile);
    }
  
    setLoading(true);
    try {
      const endpoint = editId
        ? `${ApiUrl}/public/updateBookById?id=${editId}`
        : `${ApiUrl}/public/savebook`;
  
      const res = await fetch(endpoint, {
        method: editId ? 'PUT' : 'POST',
        body: payload,
      });
  
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: editId ? 'Product updated successfully!' : 'Product saved successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
        fetchBooks();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to save product',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };
  

  const fetchBooks = () => {
    fetch(`${ApiUrl}/public/allbooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  };
  const fetchCategories = () => {
    fetch(`${ApiUrl}/public/allCategories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  };
  const resetForm = () => {
    setFormData({
      booktitle: '',
      author: '',
      description: '',
      maincatname: '',
    });
    setImageFile(null);
    setImagePreview(null);
    setEditId(null);
    setImageFile(null);
    setImagePreview(null);
  
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // <-- this clears the file input
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories(); // 🆕 call categories fetch
  }, []);

  const handleEdit = (id) => {
    const bookToEdit = books.find((b) => b.id === id);
    if (bookToEdit) {
      setFormData({
        booktitle: bookToEdit.booktitle,
        author: bookToEdit.author,
        description: bookToEdit.description,
        maincatname: bookToEdit.maincatname?.toString() || '',
      });

      setImagePreview(bookToEdit.imagePath); // full URL already returned by backend
      setEditId(bookToEdit.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

 

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33', // red
      cancelButtonColor: '#3085d6', // blue
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'bg-red-600 text-white', // Red color for confirm
        cancelButton: 'bg-blue-600 text-white', // Blue color for cancel
      },
    });
  
    if (result.isConfirmed) {
      try {
        const res = await fetch(`${ApiUrl}/public/deleteById?bid=${id}`, {
          method: 'DELETE',
        });
  
        if (res.ok) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Product has been deleted.',
            icon: 'success',
            confirmButtonColor: '#4CAF50', // Custom color for the "OK" button in success message (Green)
            timer: 2000, // The alert will close after 2 seconds (2000 ms)
            showConfirmButton: false, // Hide the confirm button
          });
          
          fetchBooks();
        } else {
          Swal.fire('Error!', 'Failed to delete the book.', 'error');
        }
      } catch (err) {
        console.error('Error deleting book:', err);
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    }
  };
  
  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      {/* Sidebar Placeholder (You can replace with your actual component) */}
      <AdminSide />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products Management</h1>
        </div>

        {/* Breadcrumb */}


    
          <h2 className="text-2xl font-bold mb-6">
            {editId ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">

            <input
              type="text"
              name="booktitle"
              value={formData.booktitle}
              onChange={handleChange}
              placeholder="Book Title"
              className="w-full p-2 border rounded-md"
              required
            />
            <select
              name="maincatname"
              value={formData.maincatname}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.catId} value={cat.maincatname}>
                  {cat.maincatname}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Author"
              className="w-full p-2 border rounded-md"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="w-full p-2 border rounded-md"
            />

            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-32 h-32 object-cover"
                />
              </div>
            )}

            {/* <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {editId ? 'Update Product' : 'Save Product'}
            </button> */}
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
          {loading ? "Adding..." : (editId ? 'Update Product' : 'Save Product')}

            </button>
          </form>
    

        <div className="max-w-6xl mx-auto mt-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Products List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Author</th>
                  <th className="p-2 border">Category</th> {/* 🆕 */}
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id} className="border-t hover:bg-gray-50">
                    <td className="p-2 border">{book.booktitle}</td>
                    <td className="p-2 border">{book.author}</td>
                    <td className="p-2 border">{book.maincatname || 'N/A'}</td> {/* 🆕 */}
                    <td className="p-2 border">{book.description}</td>
                    <td className="p-2 border space-x-2">
                      <button
                        onClick={() => handleEdit(book.id)}
                        className="bg-blue-500 ml-4 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
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

export default AdminProducts;

'use client'
import React, { useState, useEffect } from 'react';

const AdminProducts = () => {
  const apiUrl = "http://localhost:8000";

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

    try {
      const endpoint = editId
        ? `${apiUrl}/public/updateBookById?id=${editId}`
        : `${apiUrl}/public/savebook`;

      const res = await fetch(endpoint, {
        method: editId ? 'PUT' : 'POST',
        body: payload,
      });

      if (res.ok) {
        alert(editId ? 'Book updated successfully!' : 'Product saved successfully!');
        resetForm();
        fetchBooks();
      } else {
        alert('Failed to save product');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const fetchBooks = () => {
    fetch(`${apiUrl}/public/allbooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  };
  const fetchCategories = () => {
    fetch(`${apiUrl}/public/allCategories`)
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
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${apiUrl}/public/deletebook/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Book deleted');
        fetchBooks();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting book:', err);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-md">
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

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editId ? 'Update Product' : 'Save Product'}
          </button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4">Books List</h2>
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
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
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
                  <td  className="text-center p-4 text-gray-500">
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;

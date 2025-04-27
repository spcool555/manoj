
'use client'
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Assuming you use it
import './Brands.css';
import { ApiUrl } from "@/components/Api/apiurl";

const Quote = () => {
  const [quoteItems, setQuoteItems] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);  // Set loading to false initially

  // Load quote items from localStorage
  useEffect(() => {
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    setQuoteItems(storedQuoteItems);
  }, []);

  // Remove item from quote
  const removeFromQuote = (id) => {
    const updatedQuoteItems = quoteItems.filter(item => item.id !== id);
    localStorage.setItem('quoteItems', JSON.stringify(updatedQuoteItems));
    setQuoteItems(updatedQuoteItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (!name || !contact) {
      Swal.fire('Error', 'Please fill all required fields', 'error');
      return;
    }
  
    if (quoteItems.length === 0) {
      Swal.fire('Error', 'Please add products to the quote', 'error');
      return;
    }
  
    // Prepare products data
    const products = quoteItems.map(item => item.name).join(', '); // Join selected products
    const mobile = contact;
  
    try {
      setLoading(true);  // Show the loader
  
      // Send the form data to your backend
      const response = await fetch(`${ApiUrl}/public/sendbulkenquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          mobile,
          message,
          productName: products,
        }),
      });
  
      setLoading(false);  // Hide the loader once the response is received
  
      // Check the response status
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Enquiry sent successfully!',
          timer: 3000, // Auto-close after 3 seconds
          showConfirmButton: false, // Hide the confirm button
        });
  
        // Clear localStorage and reset state
        localStorage.removeItem('quoteItems');
        setQuoteItems([]);
        setName('');
        setContact('');
        setMessage('');
  
        // Reload the page to clear the cart and reset everything
        setTimeout(() => {
          window.location.href="/"; // Full page reload
        }, 3000); // Wait for 3 seconds before reloading
      } else {
        Swal.fire('Error', 'Failed to send enquiry', 'error');
      }
    } catch (error) {
      setLoading(false);  // Hide the loader if an error occurs
      console.error(error);
      Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
    }
  };
  

  return (
    <>
      {/* Fullscreen loader */}
      {loading && (
        <div className="fullscreen-loader">
          <div className="spinner"></div>
        </div>
      )}

      {/* Your Quote List code is perfect, no change */}
      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <center><h2>Your Quotation</h2></center>
                {quoteItems.length === 0 ? (
                  <p>No items in the quote.</p>
                ) : (
                  <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
                    {quoteItems.map((item) => (
                      <li key={item.id}>
                        <div className="px-4 py-5 sm:px-6">
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500">
                              <span className="text-green-600">{item.name}</span>
                            </p>
                            <button
                              className="bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-600"
                              onClick={() => removeFromQuote(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Form Section */}
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Send Enquiry</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Enter Name</label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="contact" className="pb-1 text-xs uppercase tracking-wider">Enter Contact Number</label>
                      <input
                        type="number"
                        id="contact"
                        autoComplete="contact"
                        placeholder="Your contact number"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider">Enter Message</label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </div>
                </form>
              </div>
              {/* Form Section Ends */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;

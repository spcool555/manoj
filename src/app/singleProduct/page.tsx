'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams } from "next/navigation";
import Swal from 'sweetalert2';
import Link from "next/link";
import './singleProduct.css';
import axios from 'axios';
import { ApiUrl } from '@/components/Api/apiurl';
import Head from 'next/head';

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("bid");

  const [product, setProduct] = useState(null);
  const [quoteItems, setQuoteItems] = useState([]);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [mobileNumber, setMobileNumber] = useState(''); // State to manage mobile number input
  const [loading, setLoading] = useState(true); // Loader state for full page

  const imageRef = useRef(null);

  // Fetch product details from API
  useEffect(() => {
    if (!productId) return;

    axios.get(`${ApiUrl}/public/singleBook?bid=${productId}`)
      .then((res) => {
        setProduct(res.data); // assuming res.data is the product object
        setLoading(false); // Stop loading once product is fetched
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
        setLoading(false); // Stop loading on error
      });
  }, [productId]);

  // Load quote items from localStorage
  useEffect(() => {
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    setQuoteItems(storedQuoteItems);
  }, []);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const addToQuote = () => {
    if (!product) return;
  
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    const newQuoteItem = {
      id: product.id,
      name: product.booktitle,
      price: product.mainprice,
      category: product.subcatname
    };
  
    const existingItem = storedQuoteItems.find(item => item.id === newQuoteItem.id);
    if (!existingItem) {
      const updatedQuoteItems = [...storedQuoteItems, newQuoteItem];
      localStorage.setItem('quoteItems', JSON.stringify(updatedQuoteItems));
      setQuoteItems(updatedQuoteItems);
  
      Swal.fire({
        title: "Added to Quote",
        text: `${newQuoteItem.name} has been added to your quote.`,
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        window.location.reload();  // <-- reload after Swal closes
      });
      
    } else {
      Swal.fire({
        title: "Already in Quote",
        text: `${newQuoteItem.name} is already in your quote.`,
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  };
  

  const sendEnquiry = () => {
    if (!mobileNumber) {
      Swal.fire({
        title: "Mobile number required",
        text: "Please enter a mobile number to send the enquiry.",
        icon: "warning",
      });
      return;
    }

    setLoading(true); // Start loader

    axios.post(`${ApiUrl}/public/send-enquiry`, {
      productId: product.id,
      productName: product.booktitle,
      mobileNumber,
    })
      .then(response => {
        Swal.fire({
          title: "Enquiry Sent!",
          text: "Your enquiry has been sent successfully.",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
        setIsModalOpen(false); // Close modal
      })
      .catch(error => {
        console.error("Failed to send enquiry", error);
        Swal.fire({
          title: "Error",
          text: "There was an issue sending your enquiry. Please try again.",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false); // Stop loader
      });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="p-10 text-center text-xl">Product details not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{product.booktitle} | mechomogenizer</title>
        <meta name="description" content={product.description?.substring(0, 160)} />
        <meta property="og:title" content={product.booktitle} />
        <meta property="og:description" content={product.description?.substring(0, 160)} />
        <meta property="og:image" content={product.imagePath} />
        <meta property="og:url" content={`https://mechomogenizer.com/singleProduct?${product.id}`} />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="privacy-header bg-dark text-white py-14 mt-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Products</h1>
          <p className="text-lg md:text-xl mt-4">{product.booktitle}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 px-10 py-16">
        {/* Image Section */}
        <div className="mx-auto">
  <div
    className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border border-gray-300 rounded-lg"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onMouseMove={handleMouseMove}
  >
    <img
      ref={imageRef}
      src={product.imagePath}
      alt={product.description}
      className="w-full h-full object-contain sm:h-[300px] md:h-[500px]"
    />
    {hover && (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${product.imagePath})`,
          backgroundSize: "200%",
          backgroundPosition: `${position.x}% ${position.y}%`,
          transition: "background-position 0.1s"
        }}
      />
    )}
  </div>
</div>


        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">{product.booktitle}</h2>
          <p className="text-black text-sm mb-4">{product.description}</p>

          <div className="mb-4">
            <span className="font-bold text-gray-700">Availability:</span>
            <span className="text-black ml-2">In Stock</span>
          </div>

          <div className="mt-8 mb-4">
            <span className="font-bold text-xl text-black">Product Description:</span>
            
            <div style={{ lineHeight: "1.8", fontSize: "16px" }}>
              <p><strong>Category:</strong> {product.maincatname}</p>
              {product.author && product.author !== 'null' && (
                <p><strong>Usage:</strong> {product.author}</p>
              )}

              {product.format && product.format !== 'null' && (
                <p><strong>Pressure:</strong> {product.format}</p>
              )}

              {product.pagess && product.pagess !== 'null' && (
                <p><strong>Material:</strong> {product.pagess}</p>
              )}
              {product.publisher && product.publisher !== 'null' && (
                <p><strong>Set Contain:</strong> {product.publisher}</p>
              )}
              {product.language && product.language !== 'null' && (
                <p><strong>Grade:</strong> {product.language}</p>
              )}
              {product.publishercode && product.publishercode !== 'null' && (
                <p><strong>Capacity:</strong> {product.publishercode}</p>
              )}
              {product.recomandate && product.recomandate !== 'null' && (
                <p><strong>Modal:</strong> {product.recomandate}</p>
              )}
              {product.searchcategory && product.searchcategory !== 'null' && (
                <p><strong>Brand:</strong> {product.searchcategory}</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="w-full sm:w-auto rounded-full bg-gray-900 px-6 py-2 font-bold text-white hover:bg-gray-800"
              onClick={addToQuote}
            >
              Add To Cart
            </button>
            {quoteItems.length > 0 && (
              <Link
                href="/quote"
                className="w-full sm:w-auto text-center rounded-full bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-500"
              >
                View Cart
              </Link>
            )}
          </div>

          {/* Send Enquiry Button */}
          <div className="mt-4">
            <button
              className="w-full sm:w-auto rounded-full bg-orange-500 px-6 py-2 font-bold text-white hover:bg-orange-400"
              onClick={() => setIsModalOpen(true)}
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Mobile Number */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Send Enquiry</h3>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex gap-4">
              <button
                className={`w-full sm:w-auto bg-green-500 text-white rounded-full px-6 py-2 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                onClick={sendEnquiry}
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {loading ? "Sending..." : "Send"}
              </button>
              <button
                className="w-full sm:w-auto bg-gray-300 text-black rounded-full px-6 py-2"
                onClick={() => setIsModalOpen(false)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SingleProduct />
    </Suspense>
  );
}

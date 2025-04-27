'use client'; // Ensure the page is client-side rendered

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ApiUrl } from '@/components/Api/apiurl';

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true); // New state to track loading

  useEffect(() => {
    // Only access search params on the client side
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setCategory(urlParams.get('category'));
    }
  }, []);

  useEffect(() => {
    if (category) {
      axios
        .get(`${ApiUrl}/public/allbooks?maincatname=${category}`)
        .then((res) => {
          setProducts(res.data);
          setLoading(false); // Stop loading once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching books:', error);
          setLoading(false); // Stop loading on error as well
        });
    }
  }, [category]);

  const handleProductClick = (productId) => {
    router.push(`/singleProduct?bid=${productId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div> {/* Spinner */}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 md:grid-cols-4 gap-6 p-4">
      {products?.map((product) => (
        <div
          onClick={() => handleProductClick(product.id)}
          key={product.id}
          className="cursor-pointer w-[310px] h-[430px] mx-auto mt-10 relative flex flex-col bg-white rounded-lg shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] border border-black hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          {/* Image box */}
          <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
            <img
              src={product?.imagePath}
              alt={product?.booktitle}
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Text */}
          <div className="flex-1 flex items-center justify-center p-4">
            <h3 className="text-black text-center text-lg font-medium font-['Poppins'] leading-[21px]">
              {product?.booktitle}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

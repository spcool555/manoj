'use client'; // Ensure the page is client-side rendered

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ApiUrl } from '@/components/Api/apiurl';

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

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
        .then((res) => setProducts(res.data))
        .catch((error) => console.error('Error fetching books:', error));
    }
  }, [category]);

  const handleProductClick = (productId) => {
    router.push(`/singleProduct?category=${category}&id=${productId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products?.map((product) => (
        <div
          onClick={() => handleProductClick(product.id)}
          key={product.id}
          className="cursor-pointer w-[310px] h-[430px] mx-auto mt-20 relative flex flex-col justify-between bg-white rounded-lg shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] border border-black hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product?.imagePath}
              alt={product?.booktitle}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="p-4 relative flex-col justify-end items-start flex">
            <h3 className="text-black text-lg font-normal font-['Poppins'] leading-[21px]">
              {product?.booktitle}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

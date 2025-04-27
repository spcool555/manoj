'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { ApiUrl } from '@/components/Api/apiurl';

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get('category');

  // Fetch products based on category
  const fetchProducts = async (selectedCategory) => {
    setLoading(true);
    try {
      const endpoint = selectedCategory
        ? `${ApiUrl}/public/allbooks?maincatname=${selectedCategory}`
        : `${ApiUrl}/public/allbooks`;

      const response = await axios.get(endpoint);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const handleProductClick = (productId) => {
    router.push(`/singleProduct?bid=${productId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mt-20">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer w-[310px] h-[430px] mx-auto bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200"
          >
            {/* Image */}
            <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={product?.imagePath}
                alt={product?.booktitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-4 flex justify-center items-center h-[130px]">
              <h3 className="text-black text-center text-lg font-semibold leading-snug">
                {product?.booktitle}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500 mt-10">
          No products found.
        </div>
      )}
    </div>
  );
};


export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <Products />
    </Suspense>
  );
}

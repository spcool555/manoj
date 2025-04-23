'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/public/allbooks?maincatname=`+category)
      .then((res) => setProducts(res.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleProductClick = (productId) => {
    router.push(`/singleProduct?category=${category}&id=${productId}`);
  };

  const ProductCard = ({ product }) => (
    <div
      onClick={() => handleProductClick(product.id)}
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
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

'use client';
import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Product 1", image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/DB/EE/HK/113353167/product-jpeg-250x250.jpg" },
  { id: 2, name: "Product 2", image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/LM/WK/IV/113353167/product-jpeg-250x250.jpg" },
  { id: 3, name: "Product 3", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352031666/DZ/ZC/RD/113353167/safeimagekit-resized-img-2023-10-12t115333-131-250x250.png" },
  { id: 4, name: "Product 4", image: "https://5.imimg.com/data5/ANDROID/Default/2024/10/458063651/AZ/EG/RI/113353167/product-jpeg-250x250.jpg" },
  { id: 5, name: "Product 5", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352306180/GQ/HU/NC/113353167/safeimagekit-resized-img-2023-10-13t094957-036-250x250.png" },
  { id: 6, name: "Product 6", image: "https://via.placeholder.com/250" },
  { id: 7, name: "Product 7", image: "https://via.placeholder.com/250" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  // Adjust visibleCount based on screen size
  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCount(1); // mobile
    } else if (width < 1024) {
      setVisibleCount(3); // tablet
    } else {
      setVisibleCount(5); // desktop
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? products.length - visibleCount : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= products.length - visibleCount;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);

  return (
   <>
    <div className="relative w-full overflow-hidden mt-10">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
     Homogenizer Spare Parts
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❯
      </button>
    </div>
    
    <hr />
    <div className="relative w-full overflow-hidden mt-10">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
     Homogenizer Valve
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❯
      </button>
    </div>
    <hr />
    <div className="relative w-full overflow-hidden mt-10">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
     Homogenizer Spare Parts
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❯
      </button>
    </div>
    <hr />
    <div className="relative w-full overflow-hidden mt-10">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
     Homogeniser goma galine tetrapack gea Bartoli etc
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❯
      </button>
    </div>
    <hr />
    <div className="relative w-full overflow-hidden mt-10">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
     Homogenizer Machine
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        ❯
      </button>
    </div>
    
    
    </>
  );
};

export default ProductCarousel;

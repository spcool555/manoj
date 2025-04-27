'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApiUrl } from '../Api/apiurl';

const ProductCarousel = () => {
  const[products,setProducts]=useState([]);
  const[slider1,setSlider1]=useState([]);
  const[slider2,setSlider2]=useState([]);
  const[slider3,setSlider3]=useState([]);
  const[slider4,setSlider4]=useState([]);
  const[slider5,setSlider5]=useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);


useEffect(()=>{

  axios.get(`${ApiUrl}/public/allbooks`)
  .then((res)=>{
    const data = res.data;

    const filteredProducts = data.filter(product => product.maincatname === 'Homogenizer Spare Parts');
    const filteredProducts2 = data.filter(product => product.maincatname === 'Homogenizer Valve');
    const filteredProducts3 = data.filter(product => product.maincatname === 'Pressure Gauge');
    const filteredProducts4 = data.filter(product => product.maincatname === 'Homogeniser goma galine tetrapack gea Bartoli etc');
    const filteredProducts5 = data.filter(product => product.maincatname === 'Homogenizer Machine');
    setSlider1(filteredProducts);
    setSlider2(filteredProducts2);
    setSlider3(filteredProducts3);
    setSlider4(filteredProducts4);
    setSlider5(filteredProducts5);

  })
  .catch((err)=>{
    console.log(err)
  })

},[])



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
        {slider1.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.booktitle}</h2>
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
        {slider2.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.booktitle}</h2>
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
     Pressure Gauge
</h1>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {slider3.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.booktitle}</h2>
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
        {slider4.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.booktitle}</h2>
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
        {slider5.map(product => (
          <div
            key={product.id}
            className={`flex-shrink-0 p-2`}
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-sm font-semibold">{product.booktitle}</h2>
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

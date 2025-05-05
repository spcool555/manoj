'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApiUrl } from '../Api/apiurl';
import Link from 'next/link';

const ProductCarousel = () => {
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);
  const [slider3, setSlider3] = useState([]);
  const [slider4, setSlider4] = useState([]);
  const [slider5, setSlider5] = useState([]);
  
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    axios.get(`${ApiUrl}/public/allbooks`)
      .then((res) => {
        const data = res.data;

        const filteredProducts1 = data.filter(product => product.maincatname === 'Homogenizer Spare Parts');
        const filteredProducts2 = data.filter(product => product.maincatname === 'Homogenizer Valve');
        const filteredProducts3 = data.filter(product => product.maincatname === 'Pressure Gauge');
        const filteredProducts4 = data.filter(product => product.maincatname === 'Homogeniser goma galine tetrapack gea Bartoli etc');
        const filteredProducts5 = data.filter(product => product.maincatname === 'Homogenizer Machine');

        setSlider1(filteredProducts1);
        setSlider2(filteredProducts2);
        setSlider3(filteredProducts3);
        setSlider4(filteredProducts4);
        setSlider5(filteredProducts5);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

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

  const prevSlide = (sliderIndex) => {
    switch (sliderIndex) {
      case 1:
        setCurrentIndex1(currentIndex1 === 0 ? slider1.length - visibleCount : currentIndex1 - 1);
        break;
      case 2:
        setCurrentIndex2(currentIndex2 === 0 ? slider2.length - visibleCount : currentIndex2 - 1);
        break;
      case 3:
        setCurrentIndex3(currentIndex3 === 0 ? slider3.length - visibleCount : currentIndex3 - 1);
        break;
      case 4:
        setCurrentIndex4(currentIndex4 === 0 ? slider4.length - visibleCount : currentIndex4 - 1);
        break;
      case 5:
        setCurrentIndex5(currentIndex5 === 0 ? slider5.length - visibleCount : currentIndex5 - 1);
        break;
      default:
        break;
    }
  };

  const nextSlide = (sliderIndex) => {
    switch (sliderIndex) {
      case 1:
        setCurrentIndex1(currentIndex1 >= slider1.length - visibleCount ? 0 : currentIndex1 + 1);
        break;
      case 2:
        setCurrentIndex2(currentIndex2 >= slider2.length - visibleCount ? 0 : currentIndex2 + 1);
        break;
      case 3:
        setCurrentIndex3(currentIndex3 >= slider3.length - visibleCount ? 0 : currentIndex3 + 1);
        break;
      case 4:
        setCurrentIndex4(currentIndex4 >= slider4.length - visibleCount ? 0 : currentIndex4 + 1);
        break;
      case 5:
        setCurrentIndex5(currentIndex5 >= slider5.length - visibleCount ? 0 : currentIndex5 + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Slider 1 */}
      <div className="relative w-full overflow-hidden mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Homogenizer Spare Parts
        </h2>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex1 * 100) / visibleCount}%)` }}
        >
          {slider1.map(product => (
            <div key={product.id} className="flex-shrink-0 p-2" style={{ width: `${100 / visibleCount}%` }}>
            <Link href={`/singleProduct?bid=${product.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
                <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h2 className="text-sm font-semibold">{product.booktitle}</h2>
                </div>
                
               
             
              </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => prevSlide(1)} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          ❮
        </button>
        <button onClick={() => nextSlide(1)} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          ❯
        </button>
      </div>

      {/* Slider 2 */}
      <div className="relative w-full overflow-hidden mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Homogenizer Valve
        </h2>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex2 * 100) / visibleCount}%)` }}
        >
          {slider2.map(product => (
            <div key={product.id} className="flex-shrink-0 p-2" style={{ width: `${100 / visibleCount}%` }}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              <Link href={`/singleProduct?bid=${product.id}`}>
                <img src={product.imagePath} alt={product.booktitle} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h2 className="text-sm font-semibold">{product.booktitle}</h2>
                </div>
              
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => prevSlide(2)} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          ❮
        </button>
        <button onClick={() => nextSlide(2)} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
          ❯
        </button>
      </div>

      {/* Repeat for other sliders (slider3, slider4, slider5) with respective currentIndex and slider data */}
    </>
  );
};

export default ProductCarousel;

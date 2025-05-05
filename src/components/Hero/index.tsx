'use client'
import Link from "next/link";
import { useState, useEffect } from 'react';
import img1 from '../../../public/images/manoj-slider/about_slider.jpg'
import img2 from '../../../public/images/manoj-slider/Lube-Pumps-Manufacturer.jpg'
// import img3 from '../../../public/images/manoj-slider/banner3.jpg'
import img4 from '../../../public/images/manoj-slider/sl2.jpg'
import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [img1, img2,img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <>
    <Head>
  <title>Industrial Components – Assembly Drawing, O-Ring, Valve Seat | Manoj Engineering</title>
  <meta
    name="description"
    content="0010 ASSIEME ASSEMBLY DRAWING 1 9513-1930-000
0020 CORPO DI TRASMISSIONE TRASMISSION BODY 1 9513-1924-000
0030 ALBERO A GOMITI CRANKSHAFT 1 9513-1929-030
0040 CUSCINETTO BEARING 2 9532-2102-000
0050 SUPPORTO SUPPORT 1 9513-3646-000 
0060 VITE SCREW 16 9537-0312-030
0070 O-RING O-RING 2 9531-4142-533
0080 FLANGIA FLANGE 1 9512-0214-090
0090 PARAOLIO SPLASH GUARD 1 9531-8080-533
0100 BRONZINA BUSHING 2 9510-4759-000
0110 LINGUETTA KEY 1 9538-1898-000
0150 PISTONE DI GUIDA CROSS-HEAD 3 9511-6728-000
0160 SPINOTTO WHRIST PIN 3 9532-5015-000
0170 RONDELLA WASHER 6 9510-3498-000
0180 BIELLA CONROD 3 9511-3847-090
0190 BRONZINA BUSHING 3 9511-3150-000
0200 FLANGE FLANGE 3 9513-3959-000
0210 ANELLO RASCHIATORE ROD SCRAPER 3 9531-6136-516
0220 O-RING O-RING 3 9531-4146-533
0230 VITE SCREW 12 9536-9110-020
0240 SOFFIETTO BELLOWS 3 9513-3775-000
0250 SPINA PIN 2 9539-9017-000
0260 COPERCHIO COVER 1 9510-4781-030
0270 GUARNIZIONE GASKET 3 9536-3005-576
0280 VITE SCREW 12 9537-0110-020
0290 COPERCHIO COVER 1 9511-2031-000
0300 VITE SCREW 8 9537-0410-016
0310 VITE SCREW 4 9537-0120-035
0350 TAPPO PLUG 1 9531-2921-000
0360 GUARNIZIONE GASKET 3 9531-6135-516
A COMPLETAMENTO: IN ADDITION:
- TUBAZIONE PIPE 1 9537-9064-000"
  />
</Head>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black pt-[70px] -ml-2 dark:bg-gray-dark"
      >
        <div className="relative w-full" data-carousel="static">
          <div className="relative h-40 md:h-[510px] lg:h-[510px] overflow-hidden">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
                aria-current={index === activeIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

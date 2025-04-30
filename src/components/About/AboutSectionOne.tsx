'use client';
import { useEffect, useRef } from 'react';
import './BrandSlider.css';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutSectionOne = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clients = [
    "aavin.png",
    "amul.png",
    "cocacola.png",
    "dinshaw.jpg",
    "frooti.jpg",
    "haldiram.png",
    "harshey.jpg",
    "mother.png",
    "sachi.png",
    "suruchi.png",
    "topntown.jpg",
    "c1.jpeg",
    "c2.jpeg",
    "c3.jpeg",
    "c4.jpeg",
  ];

  return (
    <section id="about" className="py-16 md:pt-20 lg:pt-18 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <main className="relative font-inter antialiased">
          <h1 className="mb-10 text-4xl font-bold text-center leading-none tracking-tight text-[#1e3690] underline dark:text-[#22295C]">
            OUR CLIENTS
          </h1>

          <div className="overflow-hidden">
            <Slider {...settings}>
              {clients.map((logo, index) => (
                <div key={index} className="flex justify-center items-center p-4">
                  <img
                    src={`/images/manoj-clients/${logo}`}
                    alt="client"
                    className="max-h-20 object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AboutSectionOne;

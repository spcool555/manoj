'use client'
import { useEffect, useRef } from 'react';
import './BrandSlider.css'
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const AboutSectionOne = () => {
  const logosRef = useRef(null);
  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    loop:true,
    arrows: true,
    autoplay:true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // for mobile and small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (<>
    <section id="about" className="py-16 md:pt-20 lg:pt-28 -mb-24 lg:-mb-0">
      <div className="container">
      <main className="relative font-inter antialiased">
       <center> 
       <h1 className="mb-10 text-4xl font-bold leading-none tracking-tight text-[#1e3690] underline md:text-4xl lg:text-4xl dark:text-[#22295C] ">OUR CLIENTS</h1>
       </center>
      {/* <div className="relative  flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-xs animate-infinite-scroll">
                <li>
                  <img src="/images/ourClients/1.jpeg" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/2.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/3.jpeg" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/4.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/5.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/6.png" alt="cleints" />
                </li>
                <li>
               <img src="/images/ourClients/9.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/8.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/10.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/11.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/12.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/13.jpg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/14.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/15.jpg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/16.jpeg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/17.jpeg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/18.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/19.png" alt="cleints" />
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div> */}<div className=''>
       <Slider {...settings}>
  <div className=' object-contain justify-end align-bottom i10 self-end '>
                  <img src="/images/ourClients/1.jpeg" alt="cleints" className="max-h-20 lg:pl-20" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline self-end align-bottom'>
                  <img src="/images/ourClients/2.png" alt="cleints" className="max-h-20 -ml-10  pt-4" />
                </div>
                <div className=' object-cocontainustify-end  items-baseline pl-10 self-end lign-bottom'>
                  <img src="/images/ourClients/3.jpeg" alt="cleints" className="max-h-20" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline pl-110 self-end align-bottom'>
                  <img src="/images/ourClients/4.png" alt="cleints" className="max-h-20" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline pl-110 self-end align-bottom'>
                  <img src="/images/ourClients/5.png" alt="cleints" className="max-h-20  pt-5" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline pl-110 self-end align-bottom'>
                  <img src="/images/ourClients/6.png" alt="cleints" className=" pl-10 -mt-4" />
                </div>
                <div className=' objeccontainer justify-end  items-baseline p10 self-end 10 align-bottom'>
               <img src="/images/ourClients/9.png" alt="cleints" className="max-h-20" />
                </div>
                <div className=' objectcontainr justify-end  items-baseline pl10 self-end 0 align-bottom'>
                <img src="/images/ourClients/8.png" alt="cleints" className="max-h-20  pt-4" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/10.png" alt="cleints" className="max-h-20  pl-10 mt-4" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/11.png" alt="cleints" className="max-h-24 "/>
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/12.png" alt="cleints" className="max-h-20" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/13.jpg" alt="cleints" className="max-h-20" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/14.png" alt="cleints" className="max-h-20" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/15.jpg" alt="cleints" className="max-h-16  pt-4" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline pl-110 self-end align-bottom'>
                <img src="/images/ourClients/16.jpeg" alt="cleints" className="-mt-16" />
                </div>
                <div className=' object-ccontainjustify-end  items-baseline pl-110 self-end align-bottom'>
                <img src="/images/ourClients/17.jpeg" alt="cleints" className="max-h-20 pl-10" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/18.png" alt="cleints" className="max-h-24 -mt-4" />
                </div>
                <div className=' object-contain justify-end  items-baseline pl-10 self-end  align-bottom'>
                <img src="/images/ourClients/19.png" alt="cleints" className="max-h-20 pt-5" />
                </div>

    </Slider>
    </div>
    
  
    </main>
      </div>
     
    </section>
    </>
   
  );
};

export default AboutSectionOne;

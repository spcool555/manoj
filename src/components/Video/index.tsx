"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative -ml-2 overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://alliancefluidhandling.com/wp-content/uploads/elementor/thumbs/GEA-MACHINE-q8arnk6b128z7j004cammtvdbvpypozxb02y7wyscg.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center pt-12">
      <h2 className="text-4xl lg:text-5xl leading-tight my-4 text-white">40+ Years Of Trust</h2>
      <p className="w-11/12 lg:w-3/5 text-lg text-white mb-8">With over 40+ years of trusted expertise, we specialize in the production of high-quality electrical equipment, ensuring reliability, innovation, and industry-leading standards.</p>
    </div>


    <div className="  mx-auto p-6 lg:px-30 sm:px-8 bg-slate-200 dark:bg-slate-800">
    <div
        className=" relative  pb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h3 className="mx-4 text-white mb-0 text-center capitalize text-2xl md:text-4xl">our specifications</h3>
    </div>
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
        <div
            className="group w-64 h-96 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg mx-4 my-7 hover:ring hover:ring-[#f9b800] dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#EA6321] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-[#f9b800] dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/3135/3135807.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 my-4 my-8">Certified Products</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">
                    Our products undergo rigorous industrial testing and hold international certifications, guaranteeing the quality and reliability you can trust.
                    </p>
                </div>
                
            </div>
        </div>
        <div
            className="group w-64 h-96 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg  mx-4 my-7 hover:ring hover:ring-[#f9b800] dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#EA6321] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-[#f9b800] dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/869/869196.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 my-4 my-8 ">Globally Trusted</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">With a legacy of over 10 years, we have built trust by designing, manufacturing, and supplying top-quality products to more than 100 countries worldwide.
</p>
                </div>
                
            </div>
        </div>
        <div
            className="group w-64 h-96 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg  mx-4 my-7 hover:ring hover:ring-[#f9b800] dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#EA6321] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-[#f9b800] dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                    <img src="https://cdn-icons-png.flaticon.com/128/3098/3098491.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 my-4 my-8">
                    Reliable Solutions
                    </h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">
                    Our team of skilled engineers delivers tailored design solutions to meet your unique requirements with efficiency and precision.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
</div>
  </div>
  
  );
};

export default Video;

'use client'
import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import './feature.css'
import Link from "next/link";
import Head from "next/head";

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setIsModalOpen(true);
    // Close modal automatically after 12 seconds
    setTimeout(() => setIsModalOpen(false), 12000);
  };

  useEffect(() => {
    // Show the modal once when the page reloads
    showModal();

    // Clean up function is not needed as we're not using setInterval
  }, []); 

  return (  
    <>
    <Head>
  <title>Industrial Components – Assembly Drawing, O-Ring, Valve Seat | Manoj Engineering</title>
  <meta
    name="description"
    content="Explore our range of components including assembly drawing, O-ring, valve seat, washer, shaft, gasket, and more – precision-engineered for industrial reliability."
  />
</Head>
      <section id="features" className="relative">
      <section className=" w-full px-8 py-6">
      {/* <!-- Content --> */}
  <div className="relative z-10 container mx-auto px-4 text-center text-black">
    <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-2xl md:text-6xl lg:text-4xl">
    Our Products <span className="relative whitespace-nowrap text-[#EA6321] dark:text-[#EA6321]">        <span className="relative">Range</span>
      </span>
    </h2>
 
  </div>

  <div className="container text-black">
  <div className="text-center mt-4 text-sm text-gray-600 max-w-4xl mx-auto">
  <p>
    Our wide product range includes top-quality components like <strong>ASSEMBLY DRAWING</strong>, 
    <strong> PRESSURE GAUGE</strong>, <strong>WASHER</strong>, <strong>FLANGE</strong>, <strong>GASKET</strong>, 
    <strong>O-RING</strong>, <strong>STUD</strong>, and <strong>NUT</strong>. We provide reliable and durable 
    parts suitable for various engineering and industrial applications.
  </p>
</div>

<br /><br />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="btn mt-10">
            <center>
                <Link href="/products" className="bg-[#1e3690] text-white px-6 py-3 rounded-lg animate-pulse hover:animate-none shadow-lg hover:shadow-[#F9A605]/50 transition duration-300">
                View All Products
                </Link>

            </center>
          </div>
        </div>
</section>
       

        {/* Thunder animation */}
        <div className="thunder-animation">
          <div className="lightning"></div>
          <div className="thunder"></div>
        </div>

        {/* Modal for Thunder Protection Device */}
        {/* {isModalOpen && (
       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className="relative p-6 bg-white rounded-lg shadow-2xl max-w-md w-full text-center animate-slide-down transform transition-all duration-300 ease-in-out">
         <h2 className="text-2xl font-extrabold mb-4 text-gray-800">Manoj Engineering Consultant</h2>
          <img src="https://image.made-in-china.com/226f3j00VTEWhNgoqIYl/B-C-385V-20ka-65ka-SPD-B-C-T1-T2-AC-Surge-Protective-Device-4-Poles-Surge-Suppressor.webp" alt="" />
         <button
           onClick={() => setIsModalOpen(false)}
           className="px-6 my-6 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg hover:from-indigo-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 ease-in-out"
         >
           Close
         </button>
       </div>
     </div>
     
        )} */}
      </section>
    </>
  );
};

export default Features;

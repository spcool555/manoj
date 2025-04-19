'use client'
import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import './feature.css'

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
      <section id="features" className="relative">
      <section className=" w-full px-8 py-16">
      {/* <!-- Content --> */}
  <div className="relative z-10 container mx-auto px-4 text-center text-black">
    <h1 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-6xl lg:text-4xl">
    Our Products <span className="relative whitespace-nowrap text-[#FAA605] dark:text-[#FAA605]">        <span className="relative">Range</span>
      </span>
    </h1>
    <p className="mx-auto mb-16 max-w-2xl text-lg">
    Matrix Incorporation is a well-reputed organisation located in Secunderabad, Telangana. Our company brings an incredible change in the products related
    </p>
  </div>

  <div className="container text-black">
          {/* <SectionTitle
            title="Our Products Range"
            paragraph="Matrix Incorporation is a well-reputed organisation located in Secunderabad, Telangana. Our company brings an incredible change in the products related"
            center
      
          /> */}

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="btn mt-10">
            <center>
                <button className="bg-[#1e3690] text-white px-6 py-3 rounded-lg animate-pulse hover:animate-none shadow-lg hover:shadow-[#F9A605]/50 transition duration-300">
                View All Products
                </button>

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
         <h2 className="text-2xl font-extrabold mb-4 text-gray-800">Matrixincorporation</h2>
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

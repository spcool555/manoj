import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../Brands/Brands.css"; // Ensure correct path to your CSS file
import Brands from "../Brands";
import '../../../public/images/countrys/1.png';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7455096,
  lng: -74.0083012,
};

const images = [
  { url: 'images/countrys/1.png', alt:'Saudi Arabia' },
  { url: 'images/countrys/2.png', alt:'Kuwait'},
  { url: 'images/countrys/3.png', alt:'Oman' },
  { url: 'images/countrys/4.png', alt:'UAE' },
  { url: 'images/countrys/5.png', alt:'Algeria' },
  { url: 'images/countrys/6.png', alt:'France' },
  { url: 'images/countrys/7.png', alt:'Shri Lanka' },
  { url: 'images/countrys/8.png', alt:'Malaysia' },
  { url: 'images/countrys/9.png', alt:'Philippine' },
  { url: 'images/countrys/10.png', alt:'Russia'},
  { url: 'images/countrys/11.png', alt:'Qutar' },
];


const Projectss = () => {
  // Function to create custom control for Google Map
  const createCenterControl = (map) => {
    const controlButton = document.createElement("button");
    controlButton.classList.add('buttonStyle'); // Example class for styling button

    controlButton.textContent = "Center Map";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";
    controlButton.addEventListener("click", () => {
      map.panTo(center); // Pan to center coordinates when clicked
    });
    return controlButton;
  };

  // Initialize Google Map and set up custom control
  const initMap = (map) => {
    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.appendChild(centerControl);
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  };

  return (
    <>
      <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">Projects</h1>
  </div>
</div>
<div className="flex bg-slate-100 justify-center items-center dark:bg-slate-800">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center ">
            <h1
                className="text-xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-xl md:text-5xl">                
                <div className="mt-2">
                    <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                        className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                        </path>
                    </svg>
                    <span className="bg-gradient-to-r from-[#f9a805] to-orange-600 bg-clip-text text-transparent">
                Matrix Incorporation Factory Location
                </span>                    </span>
                </div>
            </h1>
            <p className="mx-auto my-3 pb-12 max-w-xl text-lg text-black dark:text-slate-400 sm:mt-5 md:mt-5">
            A hub of innovation and precision, where quality meets expertise to shape the future of manufacturing.
            </p>
        </div>
    </div>
</div>
     

      <section className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60962.1177175352!2d77.51772816453888!3d17.26083037864746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc96a9557a5f095%3A0x3b1f18e412be78fe!2sTandur%2C%20Telangana%20501141!5e0!3m2!1sen!2sin!4v1723787411007!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <div className="container mx-auto px-4 py-12">
        <center>
          <h1 style={{ color:'black',  fontSize:'43px'}} className="text-2xl font-bold mb-8">Our Project Country&apos;s</h1>
        </center>
        <div>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <div key={index} className="p-4">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-contain sm:h-48 md:h-64 rounded-lg shadow-md"
                />
       <b>         <div className="mt-2 text-center">
                 {image.alt}
                </div> </b>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Brands/> */}
      {/* { url: 'images/countrys/1.png', alt:'Saudi Arabia' },
  { url: 'images/countrys/2.png', alt:'Kuwait'},
  { url: 'images/countrys/3.png', alt:'Oman' },
  { url: 'images/countrys/4.png', alt:'UAE' },
  { url: 'images/countrys/5.png', alt:'Algeria' },
  { url: 'images/countrys/6.png', alt:'France' },
  { url: 'images/countrys/7.png', alt:'Shri Lanka' },
  { url: 'images/countrys/8.png', alt:'Malaysia' },
  { url: 'images/countrys/9.png', alt:'Philippine' },
  { url: 'images/countrys/10.png', alt:'Russia'},
  { url: 'images/countrys/11.png', alt:'Qutar' }, */}
      <section className="text-gray-700 body-font">
  <div className="container px-2 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/1.png" className="h-24 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/2.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/3.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/4.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
  <div className="container px-2 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/5.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/6.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/7.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/8.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
  <div className="container px-2 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/9.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/10.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="images/countrys/11.png" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Projectss;

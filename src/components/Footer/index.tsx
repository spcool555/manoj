"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
 <footer className="bg-black text-center text-white dark:bg-black dark:text-neutral-200 lg:text-left" style={{ borderTop: "2px solid #EA6321" }}>
  {/* Main container div */}
  <div className="lg:mx-10 py-10 text-center md:text-left">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* TW Elements section */}
      <div>
        {/* <img src="/images/logo/official.png" alt="Logo" style={{ width: "80%" }} /> */}
        <img
  src="/images/logo/official.jpeg"
  alt="Logo"
  className="w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
/>      
      </div>
      
      {/* Products section */}
      <div >
        <h6 className="mb-4 font-semibold uppercase">Quick Links</h6>
        <p className="mb-4">
          <Link className="text-white hover:text-[#FAA605]" href="/">Home</Link>
        </p>
        <p className="mb-4">
          <Link className="text-white hover:text-[#FAA605]" href="products">All Products</Link>
        </p>
      
        <p className="mb-4">
          <Link className="text-white hover:text-[#FAA605]" href="certification">Certification</Link>
        </p>      
      </div>
      
      {/* Useful links section */}
      <div className="text-white">
        <h6 className="mb-4 font-semibold uppercase">Useful Links</h6>
     
        <p className="mb-4">
          <Link href="contact" className="text-white hover:text-[#fff350]">Contact Us</Link>
        </p>
   
        <p className="mb-4">
          <Link href="about" className="text-white hover:text-[#fff350]">About Us</Link>
        </p>
        <p>
          <Link href="https://www.indiamart.com/manoj-engineering-consultant/" target="_blank" className="text-white hover:text-[#fff350]">India Mart Link</Link>
        </p>
        <p hidden>
          <Link href="admin" className="text-white hover:text-[#fff350]">Admin</Link>
        </p>
      </div>

      {/* Contact form section */}
      <div>
        <form>
          <div className="flex items-end p-5 " >
            <div className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
              <div className="relative w-full m-3 formkit-field">
                <label htmlFor="member_email" className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none lg:pt-5">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  id="member_email"
                  className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Your email address..."
                  required
                  type="email"
                />
              </div>
              <button type="submit" className="px-5 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  {/* Copyright */}
  <div className="w-full border-t-2 flex justify-between border-[#EA6321] py-4 text-center text-sm px-4 bg-[#000000] text-white">
   <h2> © 2003 Manoj Engineering Consultant</h2>
   <Link target="_blank" href="https://www.linkedin.com/in/shubham-kohad-98851a261/">

   <h2> Designed & Developed By : Shubham Kohad</h2>
   </Link>
  </div>
</footer>

    </>
  );
};

export default Footer;

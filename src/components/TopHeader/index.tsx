import React from 'react';

function TopHeader() {
  return (
    // <div style={{ position: 'sticky', top: 0, background: 'black', zIndex: 1000 }}>
    // <div style={{ position: 'sticky', top: 0, background: 'black', zIndex: 1000 }}>
    //   {/* <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'white', padding: '10px 20px' }}> */}
    //   <div className="flex justify-end items-end text-white px-5 py-2 pl-48">
    //     {/* <a href=""  style={{ textDecoration: 'none', color: 'white' }}>🧺 |</a> */}
    //     <a href="" className='pr-1' >About Us </a>
    //     {/* <a href=""  >News |</a> */}
    //     <a href=""  >| Terms & Condition |</a>
    //     <a href="mailto:service@dermaposh.com" className='lg:pl-1' >export@matrixincorporation.com</a>
    //   </div>
    // </div>
    <div className="sticky top-0 bg-black z-[1000]">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center text-white px-4 py-2 space-y-1 lg:space-y-0 lg:space-x-4">
    <a href="/about" className="hover:text-[#FAA605]">About Us</a>
    <a href="/tc" className="hover:text-[#FAA605]">| Terms & Condition |</a>
    <a href="mailto:export@matrixincorporation.com" className="hover:text-[#FAA605]">
      export@matrixincorporation.com
    </a>
  </div>
</div>

  );
}

export default TopHeader;

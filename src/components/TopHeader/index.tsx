import React from 'react';

function TopHeader() {
  return (
   
    <div className="sticky top-0 bg-black z-[1000]">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center text-white px-4 py-2 space-y-1 lg:space-y-0 lg:space-x-4">
    <a href="/about" className="hover:text-[#FAA605]">Utkarsh P. Rathod :</a>
    <a href="/tc" className="hover:text-[#FAA605]"> +91 8767474066 |</a>
    <a href="mailto:export@Manoj Engineering Consultant.com" className="hover:text-[#FAA605]">
    manojenggngp@gmail.com
    </a>
  </div>
</div>

  );
}

export default TopHeader;

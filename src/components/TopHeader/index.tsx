import React from 'react';

function TopHeader() {
  return (
    <div className="sticky top-0 bg-black z-[1000]">
      <div className="flex flex-row justify-center lg:justify-end items-center text-white px-4 py-2 space-x-2 lg:space-x-4 overflow-x-auto whitespace-nowrap text-[12px] lg:text-base">
        <span className="hover:text-[#FAA605]">Utkarsh P. Rathod :</span>
        <span  className="hover:text-[#FAA605]">+91 8767474066 |</span>
        <a href="mailto:mec@mechomogenizer.com" className="hover:text-[#FAA605]">
        mec@mechomogenizer.com
        </a>
      </div>
    </div>
  );
}

export default TopHeader;

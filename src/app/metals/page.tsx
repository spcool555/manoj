"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import "./Brands.css";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "About Page | Free Next.js Template for Startup and SaaS",
//   description: "This is About Page for Startup Nextjs Template",
//   // other metadata
// };

const menuDataProductsRange = [
  {
  title: "Products",
  submenu: [
    {
      title: "Grounding",
      links: [
        { title: "Solid Earthing Rods", path: "/products?category=SolidEarthingRods", imageUrl: "/images/products/46.jpg"},
        { title: "Earthing System", path: "/products?category=EarthingSystem" , imageUrl: "/images/products/47.png"},
        { title: "Chemical Earthing Electrods", path: "/products?category=ChemicalEarthingElectrods", imageUrl: "/images/products/63.jpg" },
        { title: "Pipe Earthing Rods", path: "/products?category=PipeEarthingRoads", imageUrl: "/images/products/67.jpg" },
        { title: "Earth Station", path: "/products?category=EarthStation", imageUrl: "https://tiimg.tistatic.com/fp/2/005/018/chemical-earthing-electrode-468.jpg" },
        { title: "Lattice Grounding Mats", path: "/products?category=lgm", imageUrl: "/images/products/86.png" },
        { title: "Earth Plates", path: "/products?category=ep", imageUrl: "/images/products/90.png" },
        { title: "Earth Clamps", path: "/products?category=ec" , imageUrl: "/images/products/110.png"},
        { title: "Earth Bars", path: "/products?category=eb" , imageUrl: "/images/products/121.jpg"},
        { title: "Earth Inspection Housing", path: "/products?category=eih", imageUrl: "/images/products/135.png" },
        { title: "Low Resistance Earthing Compound ", path: "/products?category=lrec" , imageUrl: "https://cpimg.tistatic.com/06956272/b/4/Maintenance-Free-Earthing-Rod.jpg"},
        { title: "Busbars", path: "/products?category=busbars" , imageUrl: "/images/products/140.jpg"},
        { title: "Copper Braided Flexible Links Shunts And Jumpers", path: "/products?category=cbflsaj", imageUrl: "/images/products/158.jpg" },
        { title: "Earth Accessories", path: "/products?category=ea" , imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRz8fuEG1beJvWr8pJGFzrB7zJXSKYxwBX1WGfRvE4e9-G41_LBkTLC89HGxtikEXFuivfZfuzgQT7_sxOmRnfTx0o9T6aWc0SnqK_CLCra9pOX_JVs2IgXhQ&usqp=CAE"},
      ],
    },

    {
      title: "Lightning Protection",
      links: [
        { title: "Air Rods", path: "/products?category=airrods" },
        { title: "Lightning Protection Clamps", path: "/products?category=LightningProtectionClamps" },
      
      ],
    },
    {
      title: "Conductors",
      links: [
        { title: "Conductors", path: "/products?category=Conductors" },
       
      ],
    },
    {
      title: "Metals",
      links: [
        { title: "Copper", path: "products?category=Copper" },
        { title: "Aluminum", path: "products?category=Aluminum" },
        { title: "Brass", path: "products?category=Brass" },
        { title: "Stainless Steel", path: "products?category=StainlessSteel" },
        { title: "Phosphor Bronze", path: "products?category=PhosphorBronze" },
        { title: "Tinned Copper", path: "products?category=TinnedCopper" },
        { title: "Molybdenum", path: "products?category=Molybdenum" },
        { title: "Titanium", path: "products?category=Titanium" },
        { title: "Nickel", path: "products?category=Nickel" },
        { title: "Lead", path: "products?category=Lead" },
        { title: "Alloy Steel", path: "products?category=AlloySteel" },
        { title: "Hot Dip Galvanized Steel", path: "products?category=HotDipGalvanizedSteel" },
     
      
      ],
    },

    {
      title: "Cable Trays",
      links: [
        { title: " Perforated Cable Trays", path: "products?category=pct" },
        { title: " Ladder Type Cable Trays", path: "products?category=ltct" },
        { title: " Trunking Cable Trays", path: "products?category=tct" },
        { title: " Raceways Cable Tray", path: "products?category=rct" },
        { title: " Wire Mesh Cable Trays", path: "products?category=wmct" },
        { title: " Non-Mettalic Cable Trays", path: "products?category=nmct" },
     
      
      ],
    },
  
 

   
    // {
    //   title: "Surge Protection",
    //   links: [
    //     { title: " Mains Distribution Protection", path: "/ios" },
    //     { title: " Mains, Single Circuit Protection", path: "/android" },
    //     { title: "Data Line Protection", path: "/android" },
    //     { title: "Telecom Protection", path: "/android" },
    //     { title: "   Photovoltaic Protection", path: "/android" },
    //     { title: "   Equipotential Bonding", path: "/android" },
    //     { title: "  Low Voltage Type 2 ", path: "/android" },
    //     { title: " Countersunk Machine Screws", path: "/android" },
    //     { title: "  SPA Range", path: "/android" },
    //     { title: "     Mains Socket Strips", path: "/android" },
    //     { title: "  Accessories", path: "/android" },
    //   ],
    // },

    {
      title: "Exothermik Welding",
      links: [
        { title: "Bar to Bar", path: "products?category=btb" },
        { title: "Bar to Earth Rod", path: "products?category=bter" },
        { title: "Bar to Steel Surface", path: "products?category=btss" },
        { title: "Cable to Bar", path: "products?category=ctb" },
        { title: "Cable to Cable", path: "products?category=ctc" },
        { title: " Cable to Earth Rod", path: "products?category=cter" },
        { title: "  Cable to Rebar ", path: "products?category=ctr" },
        { title: " Cable to Steel Surface", path: "products?category=ctss" },
        { title: " Stud to Steel Surface ", path: "products?category=stss" },
        { title: "  Welding Powders  ", path: "products?category=wp" },
      ],
    },

   
    {
      title: "Fastners & Fixings",
      links: [
        { title: " Security Fixings", path: "products?category=sf" },
        { title: "Hexagon Head Set Screws", path: "/products?category=hhsc" },
        { title: "Hexagon Nuts", path: "products?category=hn" },
        { title: "Spring Washers", path: "products?category=sw" },
        { title: "Countersunk Wood Screw", path: "products?category=cws" },
        { title: "Tinned Copper Tapes", path: "products?category=tct" },
        { title: "Round Head Wood Screws ", path: "products?category=rhws" },
        { title: "Rail", path: "products?category=rail" },
        { title: "Plastic Wall Plugs", path: "products?category=pwp" },
      ],
    },
  ],
},

];

const Metals = () => {

    const usePathName = usePathname();    

    const productMenu = menuDataProductsRange[0].submenu;

  const groundingMenu = productMenu.find((item) => item.title === "Metals");
  const otherMenus = productMenu.filter((item) => item.title !== "Metals");
  


  return (
    <>
  
    <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">Metals</h1>
  </div>
</div>

 <div className="p-4">
      {/* <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 className="text-3xl">Tailwind CSS</h1>
</div> */}

      
{/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
 
    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    {groundingMenu?.links.map((link, index) => (
    <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
        {/* imageUrl: "/images/products/46.jpg", */}
            <img src={link.imageUrl}
                    alt="Product" className="h-72 w-72 object-contain rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-lg font-bold text-[#002969] block capitalize">{link.title}</p>
                <div className="flex items-center">
                    <p className="text-sm font-semibold text-[#FF7C01] cursor-auto my-2">View Collection</p>
                </div>
            </div>
        </a>
    </div>
     ))}
</section>


{/* <ul className="mb-6">
        {groundingMenu?.links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-blue-600 hover:underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul> */}
<div className="bg-gray-50">
    <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Other Products</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                       <Link href="/conductors" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Conductors</h3>
                </Link>
                       <Link href="/earthing" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Earthing</h3>
                </Link>
                       <Link href="/exothermic-welding" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Exothermic Welding</h3>
                </Link>
                       <Link href="/fastners-fixings" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Fastners & Fixings</h3>
                </Link>
                       <Link href="/lightning-protection" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Protection</h3>
                </Link>
                       <Link href="/cable-trays" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable Trays</h3>
                </Link>
                       <Link href="/metals" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Metals</h3>
                </Link>
                       <Link href="/grounding" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                   
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Grounding</h3>
                </Link>
            </div>
        </div>
    </section>
</div>
    </div>
</>
  
  );
};

export default Metals;

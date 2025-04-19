import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import "./Brands.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Earthing Design System",
  description: "",
  // other metadata
};

const EarthingDesignSystem = () => {
  return (
    <>
  
    <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">About Us</h1>
  </div>
</div>

<div className="bg-gray-800">
<div className=" container items-center grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-1 pt-24 md:py-0">
            <h1 className="text-3xl font-semibold text-[#f9b800] xl:text-5xl lg:text-3xl">Experience Innovation & Reliability with MATCO</h1>
            <p className="py-4 text-lg text-white 2xl:py-8 md:py-6 2xl:pr-5">
            Welcome to Matrix Incorporation, a trusted name in the field of grounding, earthing, lightning protection, and electrical solutions. With over 10 years of experience, we have been at the forefront of providing high-quality, reliable, and innovative electrical grounding and lightning protection products to industries worldwide.
            we are established in 1946 is a world-leading manufacturer of earthing,
                    lightning protection, exothermic welding and surge
                    protection products. We also offer expert design services
                    for earthing & lightning systems.            </p>
          </div>
  
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-[400px] sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"  src="./images/aboutus.jpeg"
                  alt="about image" width="300" height="auto"/>
          </div>
        </div>
        </div>
        <div
  className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
  <h1
    className="mx-auto max-w-4xl font-display text-5xl tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
    ACCREDITATIONS<br/>
    <svg aria-hidden="true" viewBox="0 0 418 42" className=" top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
      </svg>
  </h1>
  {/* <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
    
  </h2> */}

  <div className="w-full py-6 dark:bg-gray-800">
  <div className="flex flex-col w-[90%]  mx-auto">
    <div className="w-full flex flex-col md:flex-row py-6 gap-8">
      <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#faa706] py-6 px-6 rounded-md transition-all duration-500">
        <p className=" line-clamp-4 md:line-clamp-none text-black group-hover:text-black dark:group-hover:text-gray-200">
        We offer design, site support and supervision services for Earthing & Lightning Protection in accordance with BS EN 62305. Design of Earthing systems to BS 7430:2011+A1:2015 and Local Codes of Practice, Soil Resistivity Tests & Reports, Earth Resistance Tests & Reports, Inspection and supervision on sites for installation of LPS.
        </p>
      </div>
      <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#faa706] group-hover:text-black py-6 px-6 rounded-md transition-all duration-500">
        <p className=" line-clamp-4 md:line-clamp-none text-black group-hover:text-black dark:group-hover:text-gray-200">
        MATCO are tested to and in compliance with BS EN 62561 Lightning Protection System Components, BS EN 62305 Protection against Lightning and BS 7430:2011+A1:2015 Code of Practice for Protective Earthing of Electrical Installations        </p>
      </div>
      <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#faa706] group-hover:text-black py-6 px-6 rounded-md transition-all duration-500">
      
        <p className=" line-clamp-4 md:line-clamp-none text-black group-hover:text-black dark:group-hover:text-gray-200">
        Wallis work internationally with consultants, contractors and power engineering concerns either directly and through our comprehensive network of distributors.

</p>
      </div>
      <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#faa706] group-hover:text-black py-6 px-6 rounded-md transition-all duration-500">
       
        <p className=" line-clamp-4 md:line-clamp-none text-black group-hover:text-black dark:group-hover:text-gray-200">
        MATCO is accredited with BSI ISO 9001:2015 & BSI ISO 45001:2018 (Copies of which can be obtained upon request).

</p>
      </div>
    </div>
  </div>
</div>

</div>

{/* <center className="mt-16">
          <center className="mb-20">
            <h1 className="  mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
              ACCREDITATIONS
            </h1>
          </center>
          <div className="flex justify-between ">
            <div className="w-1/2">
              <p>
                We offer design, site support and supervision services for
                Earthing & Lightning Protection in accordance with BS EN 62305.
                Design of Earthing systems to BS 7430:2011+A1:2015 and Local
                Codes of Practice, Soil Resistivity Tests & Reports, Earth
                Resistance Tests & Reports, Inspection and supervision on sites
                for installation of LPS.
              </p>
              <p className="mt-8">
                Wallis work internationally with consultants, contractors and
                power engineering concerns either directly and through our
                comprehensive network of distributors.
              </p>
            </div>
            <div className="w-1/2">
              <p>
                MATCO are tested to and in compliance with BS EN 62561 Lightning
                Protection System Components, BS EN 62305 Protection against
                Lightning and BS 7430:2011+A1:2015 Code of Practice for
                Protective Earthing of Electrical Installations
              </p>

              <p className="mt-14">
                MATCO is accredited with BSI ISO 9001:2015 & BSI ISO 45001:2018
                (Copies of which can be obtained upon request).
              </p>
            </div>
          </div>
        </center> */}
        <div className="h-screen w-screen bg-gray-200">
    <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <span
                                className="rounded-full uppercase bg-[#f9b800] px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                Specifications
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                             EARTHING SYSTEM DESIGNS FROM THE EXPERTS
                        
                            </h1>
                        </div>

                        <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Our highly experienced Technical Services team are able to offer
  Earth Electrode System Designs and associated testing services using
  the most up-to-date equipment and design software ‘CDEGS’. All of
  these works are carried out by competent and highly experienced
  Electrical Engineers and Technicians and are carried out in
  accordance with BS 7430:2011+A1:2015 – The code of practice for
  protective earthing of electrical installations and BS EN 50522:2022
  – Earthing of power installations exceeding 1kV a.c. amongst other
  specifications. All of our designs also comply with National &
  International standards.
                              </p>

                    </div>


                </div>
            </div>

            <div className="flex items-center w-full col-span-6">
                <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                    <div style={{width: "100%", height: "100%"}}>
                        <div style={{width: "100%", height: "100%"}}>
                            <iframe 
                             src="https://www.youtube.com/embed/KwEdrgAoW0c?si=ah_rekTM7iVSUAG0"
                             title="YouTube video player"
                            //  allow="autoplay;"
                             referrerPolicy="strict-origin-when-cross-origin"
                             allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                width="100%" height="100%"
                                id="widget2">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
   
      
      {/* <section className="">
        <div className="container pb-6" >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="brnds flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                <div className="hh">
                  <h1>Can we help?</h1>
                </div>
                <div className="pp">
                  <p>
                    Our friendly team are on hand to answer any questions you
                    might have.
                  </p>
                  <p>+91-40-31603812 or service@matrixincorporation.com</p>
                </div>
              </div>
            </div>

          <img src="https://www.techwinspd.com/uploads/image/20210728/electrical-power-building-power-lighting-protection-solution.jpg" alt="matrixincorporation" style={{width:"100%"}}/>
          </div> 
        </div>
      </section> */}
    </>
  
  );
};

export default EarthingDesignSystem;

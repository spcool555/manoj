import "./Brands.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>

      <div className="relative  bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/manoj-slider/3.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
          <h1 className="text-5xl font-bold leading-tight mb-4">About Us</h1>
        </div>
      </div>

    <center>
    <div className="bg-gray-800">
        <div className=" container items-center grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-1 pt-24 md:py-0">
            <h1 className="font-semibold text-[#EA6321] text-2xl  xl:text-4xl lg:text-3xl">Manoj Engineering Consultant</h1>
            <p className="py-4 text-lg text-white 2xl:py-8 md:py-6 2xl:pr-5">
              Established in the  Nagpur, Maharashtra, we “Manoj Engineering Consultant ” are a Sole Proprietorship firm, engaged as the foremost Manufacturer of Stainless Steel Valve, Homogenizer Spare Parts , etc. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market. We also provide Milk Homogenizer Repairing Service.
            </p>
          </div>

          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-[400px] sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="./images/manoj-infra/image4.png"
              alt="about image" width="300" height="auto" />
          </div>
        </div>
      </div>
    </center>
      <div
        className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <h1
          className="mx-auto max-w-4xl font-display text-3xl  xl:text-5xl tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
          SPECIALITY<br />
          <svg aria-hidden="true" viewBox="0 0 418 42" className=" top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
        </h1>
        {/* <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
    
  </h2> */}

        <div className="w-full py-6 dark:bg-gray-800">
          <div className="flex flex-col w-[90%]  mx-auto">
            <div className="w-full flex flex-col md:flex-row py-6 gap-8">
              <div className="w-full md:w-1/3 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#EA6321] py-6 px-6 rounded-md transition-all duration-500">
                <ul>
                  <li>CHEVRONS</li>
                  <li>PA RINGS</li>
                  <li>PISTON RINGS</li>
                  <li>PISTONS & PLUNGERS</li>
                  <li>MUSHROOM & PUPET VALVE        </li>
                  <li>SUCTION/DISCHARGE VALVES        </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#EA6321] group-hover:text-black py-6 px-6 rounded-md transition-all duration-500">
                <ul>
                  <li>VALVE SEATS</li>
                  <li>CRANK SHAFTS        </li>
                  <li>SHELL BEARINGS</li>
                  <li>MOTORS</li>
                  <li>STAGE ASSEMBLIES        </li>
                  <li>PRESSURE GAUGE       </li>
                </ul>

              </div>
              <div className="w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-[#faa706] dark:border-y group hover:bg-[#EA6321] group-hover:text-black py-6 px-6 rounded-md transition-all duration-500">

                <ul>
                  <li>IMPACT HEAD</li>
                  <li>IMPACT RING        </li>
                  <li>OUTLET HEAD        </li>
                  <li>PLUNGERS SEALS</li>
                  <li>SSEALS & GASKETS        </li>
                  <li>1ST & 2ND STAGE VALVE       </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>


    <center>
    <div className="extra bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg w-full max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-[#EA6321] mb-6 text-center">Business Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
          <div>
            <p className="font-semibold">Nature of Business:</p>
            <p>Engineering Products</p>
          </div>
          <div>
            <p className="font-semibold">Legal Status of Firm:</p>
            <p>Proprietorship</p>
          </div>
          <div>
            <p className="font-semibold">Annual Turnover:</p>
            <p>01 cr - 04 cr</p>
          </div>
          <div>
            <p className="font-semibold">GST Registration Date:</p>
            <p>01-07-2017</p>
          </div>
          <div>
            <p className="font-semibold">Total Number of Employees:</p>
            <p>50+ People</p>
          </div>
          <div>
            <p className="font-semibold">GST Number:</p>
            <p>27AFDPR1538J1Z9</p>
          </div>
          {/* <div className="md:col-span-2">
            <p className="font-semibold">HSN Code:</p>
            <p>68125000</p>
          </div> */}
          {/* <div className="md:col-span-2">
      <p className="font-semibold">HSN Description:</p>
      <p>
        Fabricated asbestos fibres; mixtures with a basis of asbestos or with a basis of asbestos and magnesium carbonate; 
        articles of such mixtures or of asbestos (for example, thread, woven fabric, clothing, headgear, footwear, gaskets), 
        whether or not reinforced, other than goods of heading 6811 or 6813 — clothing, clothing accessories, footwear and headgear.
      </p>
    </div> */}
        </div>
      </div>
    </center>



      <section className="">


        <div className="extra bg-black text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              At Manoj Engineering Consultant, our mission is to deliver innovative, durable, and affordable engineering solutions that empower industries across India. We are committed to excellence in product quality and customer satisfaction.
            </p>
          </div>
        </div>

      </section>
    </>

  );
};

export default AboutPage;

import { Brand } from "@/types/brand";
import Image from "next/image";
import './Brands.css'

const Brands = () => {
  return (
    <>
   <section className=" relative py-20 overflow-hidden bg-gradient-to-br from-black via-blue-800 to-blue-500 shadow sm:py-24 md:py-24">
  <div className="relative max-w-6xl lg:px-16 px-2 mx-auto xl:px-0 ">
    <svg className="absolute top-0 left-0 hidden w-32 h-32 -mt-3 -ml-16 text-yellow-300 opacity-50 xl:block" stroke="white" fill="none" viewBox="0 0 144 144">
      <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"></path>
    </svg>
    <div className="relative xl:pl-32 lg:flex lg:items-center ">
      <div className="relative">
        <blockquote className="relative" >
          <div className="text-md  leading-9 tracking text-gray-100 md:text-xl">
            <p className=""><span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow via-orange-200 to-red-600">Reaching Millions Of Customers</span>
            <br/><br/> Our friendly team are on hand to answer any questions you might have contact<br/> +91 8767474066 / 9422801983  or  mec@mechomogenizer.com 
          </p>

          </div>
        </blockquote>
       
      </div>
    </div>
  </div>
</section>
 
    </>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};

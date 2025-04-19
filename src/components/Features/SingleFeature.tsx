import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph,path } = feature;
  return (<>
<Link href={path}>
<div className="w-full h-full flex flex-col  bg-white shadow-xl justify-start border-black border  items-center rounded-lg  ring-opacity-100  transform transition-all duration-300 lg:hover:scale-105">
    <div className="flex flex-wrap lg:flex-nowrap justify-start items-center">
    <div className="flex flex-col gap-4  items-center justify-start dark:bg-[#262525] group">
        {/* <img className="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" /> */}
        <div className="w-[16rem] h-[12rem] sm:w-[15rem] sm:h-[10rem] object-center aspect-square rounded-t-lg mb-10   rounded-md ">
    {icon}
          </div>
        <div className="flex flex-col">
            <div className="justify-items-center items-center my-4">
                                <h2 className="pl-2 pt-4 text-2xl group-hover:text-[#1e3690] cursor-pointer">{title}</h2>
                                <a href="" className="pl-2 pt-2 text-sm group-hover:text-red-600 cursor-pointer">View Range</a>                
            </div>


            {/* <p className="pl-4 text-gray-800 dark:text-gray-300  mb-4">{paragraph}</p> */}
            {/* <button className="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button> */}
        </div>
    </div>
</div>
</div>
</Link>
  
    </>
    // old Code
    // <div className="w-full">
    //   <div className="wow fadeInUp" data-wow-delay=".15s">
    //    <center> <div className="mb-10 flex h-[70px] w-[143px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
    //       {icon}
    //     </div><br />
    //     <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //       {title}
    //     </h3>
    //     <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //       {paragraph}
    //     </p>
    //     </center>
    //   </div>
    // </div>
  );
};

export default SingleFeature;

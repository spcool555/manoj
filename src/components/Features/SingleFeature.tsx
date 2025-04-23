import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  return (
    <>
      <Link href={path}>
        <div className="w-full h-full flex flex-col bg-white shadow-xl justify-start border-black border items-center rounded-lg ring-opacity-100 transform transition-all duration-300 lg:hover:scale-105">
          <div className="flex flex-wrap lg:flex-nowrap justify-start items-center">
            <div className="flex flex-col gap-4 items-center justify-start dark:bg-[#262525] group">
              {/* Icon */}
              <div className="w-[16rem] h-[12rem] sm:w-[15rem] sm:h-[10rem] object-center aspect-square rounded-t-lg mb-10 rounded-md ">
                {icon}
              </div>
              <div className="flex flex-col">
                <div className="justify-items-center items-center my-4">
                  <h2 className="pl-2 pt-4 text-2xl group-hover:text-[#1e3690] cursor-pointer">
                    {title}
                  </h2>
                  <span className="pl-2 pt-2 text-sm group-hover:text-red-600 cursor-pointer">
                    View Range
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleFeature;

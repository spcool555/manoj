"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "../TopHeader";
import path from "path";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const [quoteItems, setQuoteItems] = useState([]);
  const totalProducts = quoteItems.length;

  useEffect(() => {
    UpdateCart();
  }, []);

  const UpdateCart = () => {
    const storedQuoteItems =
      JSON.parse(localStorage.getItem("quoteItems")) || [];
    setQuoteItems(storedQuoteItems);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!navbarOpen) return;
      const navbarElement = document.getElementById("navbarCollapse");
      if (!navbarElement.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [navbarOpen]);

  return (
    <>
    <div className="">

    <div className="hidden lg:block">
  <TopHeader />
</div>
    </div>
      
     
      <header
        className={`header top-15 left-0 z-40 flex w-full items-center absolute bg-[#EA6321]`}
      >
        <div className="container">
          {/* <div className="relative -mx-4 flex items-center justify-between mt-3"> */}
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60  max-w-full px-4 xl:mr-12   -mb-1.5">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  // sticky ? "py-5 lg:py-2" : "py-4"
                  sticky ? "pt-2 lg:pt-2  -mt-5" : "pt-2"
                } `}
              >
           
                
  <img
    src="/images/logo/official.jpeg"
    alt="logo"
    className="object-contain h-[75px] py-0.5 w-full"
  />
                <Image
                  src="/images/logo/official.jpeg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="log hidden dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  // className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden"
                  className="absolute right-4 top-1/2 m-1 block translate-y-[-50%] rounded-lg  ring-white focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white pl-1 pr-2 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  {/* <ul className="block items-center justify-center bg-transparent align-middle lg:flex lg:space-x-5  border border-black"> */}
                  {/* <ul className="block items-center justify-center bg-transparent align-middle lg:flex  border border-black hover:border hover:border-black  -mb-7"> */}
                  <ul className="block items-center justify-center bg-transparent align-middle bg-black lg:flex">
                    {menuData.map((menuItem, index) => (
                      // <li key={index} className="group relative  border border-black ">
                      <li key={index} className="group relative py-0.5">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex lg:mr-0  lg:inline-flex lg:px-4 lg:py-5  py-0 px-2 hover:bg-black  hover:rounded-b-xl hover:text-white   ${
                              usePathName === menuItem.path
                                ? "text-white bg-black rounded-b-xl  dark:text-white lg:px-4 lg:py-5  py-0 px-2 hover:bg-black hover:rounded-b-xl hover:text-white"
                                : "text-dark hover:text-white dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                          {/* <Link href={menuItem.path}></Link> */}
                            <p
                              onClick={() => handleSubmenu(index)}
                              // className="flex  cursor-pointer items-center justify-between py-2 text-lg text-dark group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                              className="flex   lg:px-4 lg:py-5  py-0 px-2 hover:bg-black  hover:rounded-b-xl hover:text-white  cursor-pointer items-center justify-between   text-dark group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              // className={`mega-menu  relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[900px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              className={`mega-menu lg:-ml-72 mt-1  relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[1100px]  lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                     <div
  className={`grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4`}
>
  {menuItem.submenu &&
    menuItem.submenu.map((submenuCategory, subIndex) => (
      <div key={subIndex}>
        <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-white lg:text-base">
          {submenuCategory.title}
        </h4>
        <ul className="space-y-2">
          {submenuCategory.links.map((submenuItem, linkIndex) => (
            <li key={linkIndex}>
              {menuItem.title === "Services" && (
                <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <img
                    src={submenuCategory.img}
                    alt={submenuCategory.title}
                    className="mb-2 h-24 w-full max-w-[150px] rounded object-cover"
                  />
                  <p className="text-xs sm:text-sm lg:text-sm leading-snug">
                    {submenuCategory.desc}
                  </p>
                </div>
              )}
              <Link
                href={submenuItem.path}
                className="block text-sm text-[#142561] hover:text-red-600 dark:text-white/80 dark:hover:text-white lg:text-base"
              >
                {submenuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
</div>

                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0   mt-3">
                {quoteItems.length > 0 && (
                  <div className="">
                    <Link
                      href="/quote"
                      className="mx-5 w-[5%] rounded-full bg-black p-4 text-center font-bold text-white hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                    >
                      <div className="relative inline-block">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                          {totalProducts}
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
                <div>{/* <ThemeToggler /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

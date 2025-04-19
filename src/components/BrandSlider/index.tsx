'use client'
import { useEffect, useRef } from 'react';
// import './BrandSlider.css'
export default function LogoCarousel() {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <main className="relative font-inter antialiased">
      <div className="relative  flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <img src="/facebook.svg" alt="Facebook" />
                </li>
                <li>
                  <img src="/disney.svg" alt="Disney" />
                </li>
                <li>
                  <img src="/airbnb.svg" alt="Airbnb" />
                </li>
                <li>
                  <img src="/apple.svg" alt="Apple" />
                </li>
                <li>
                  <img src="/spark.svg" alt="Spark" />
                </li>
                <li>
                  <img src="/samsung.svg" alt="Samsung" />
                </li>
                <li>
                  <img src="/quora.svg" alt="Quora" />
                </li>
                <li>
                  <img src="/sass.svg" alt="Sass" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
        <a className="text-xs text-slate-500 hover:underline" href="https://cruip.com">&copy;Cruip - Tailwind CSS templates</a>
      </footer>
      <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50" x-data="{ bannerOpen: true }">
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a className="font-medium hover:underline text-slate-300" href="https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/">
              Read Tutorial
            </a>
            <span className="italic px-1.5">or</span>
            <a className="font-medium hover:underline text-indigo-500 flex items-center" href="https://github.com/cruip/cruip-tutorials/blob/main/logo-carousel/index.html" target="_blank" rel="noreferrer">
              <span>Download</span>
              <svg className="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
              </svg>
            </a>
          </div>
          <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700" >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

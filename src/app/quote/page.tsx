'use client';
import { useEffect, useState } from "react";


import './Brands.css'
 const metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const Quote = () => {
  const [quoteItems, setQuoteItems] = useState([]);

  useEffect(() => {
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    setQuoteItems(storedQuoteItems);
  }, []);

  const removeFromQuote = (id) => {
    const updatedQuoteItems = quoteItems.filter(item => item.id !== id);
    localStorage.setItem('quoteItems', JSON.stringify(updatedQuoteItems));
    setQuoteItems(updatedQuoteItems);
    location.reload();
  };

  return (
    <>
   

      <section className="ab pt-16">
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="brnds flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                <div className="hh">
                  <h1>Request A Quote</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <div>
                 <center> <h2>Your Quotation</h2> </center>
                  {quoteItems.length === 0 ? (
                    <p>No items in the quote.</p>
                  ) : (
                    <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
                      {quoteItems.map((item) => (
                        <li key={item.id}>
                          <div className="px-4 py-5 sm:px-6">
                            <div className="mt-4 flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-500">
                                <span className="text-green-600">{item.name}</span>
                              </p>
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              1
                              </a>
                              <button
                                className="bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-600"
                                onClick={() => removeFromQuote(item.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                 
                </div>
              </div>

              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="dropdown" className="pb-1 text-xs uppercase tracking-wider">
                        Select an option
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      >
                        <option value="option1">Consultant</option>
                        <option value="option2">Electrical Contractor</option>
                        <option value="option3">Electrical Trader/Distributer</option>
                        <option value="option4">Surge Protection Product</option>
                        <option value="option5">Earthing Design Service</option>
                        <option value="option6">Lightning Protection Design Services</option>
                        <option value="option7">Installation Services</option>
                      </select>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label className="pb-1 text-xs uppercase tracking-wider">Choose options</label>
                      <div className="flex flex-col">
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="earthingProducts" className="mr-2" />
                          Earthing Products
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="lightningProtectionProducts" className="mr-2" />
                          Lightning Protection Products
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="exothermicWeldingProducts" className="mr-2" />
                          Exothermic Welding Products
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="surgeProtectionProducts" className="mr-2" />
                          Surge Protection Products
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="earthingDesignServices" className="mr-2" />
                          Earthing Design Services
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="lightningProtectionDesignServices" className="mr-2" />
                          Lightning Protection Design Services
                        </label>
                        <label className="mb-1">
                          <input type="checkbox" name="checkboxOption" value="installationServices" className="mr-2" />
                          Installation Services
                        </label>
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;

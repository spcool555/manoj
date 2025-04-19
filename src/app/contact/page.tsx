import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import "./Brands.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">Get In Touch</h1>
  </div>
</div>
      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-stretch justify-center md:flex-row">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-full md:pr-6">
                <p className="mb-12 mt-3 text-lg text-gray-600 dark:text-slate-400">
                  <b style={{ color: "#F6A705" }}>Our Strength</b> <br />
                  What are the reasons behind our capacity in meeting all the
                  market demands? The very first reason is our well-designed
                  supply unit. Our supply chain is powered by world-class
                  machinery and highly trained staff. With a rich heritage of
                  over 5 years, Matrix Incorporation has demonstrated itself as
                  a leader in the global market.
                </p>
                <ul className="mb-6 space-y-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Reg. Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        #20-4-529/5&6 Chowmohalla Palace Hyderabad-500002
                        Telangana State India{" "}
                      </p>
                      <p className="text-gray-600 dark:text-slate-400"></p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mob No.+91-7780599423 / +91-9052729776 Skype / WhatsApp
                        / wechat: +91-9052729776 Tel No. +91-40-31603812 Fax No.
                        +91-40-31603812
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: service@matrixincorporation.com
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: sales@matrixincorporation.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Saturday: 10:00 - 07:00
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1hXII84tPkwBmWIlxAw3K9qtbK1dDhqM&hl=en&ehbc=2E312F"
                  width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Enquiry Form
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
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
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
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
                      <label
                        htmlFor="dropdown"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Select an option
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      >
                        <option value="option1">Consultant</option>
                        <option value="option2">Electrical Contractor</option>
                        <option value="option3">
                          Electrical Trader/Distributer
                        </option>

                        <option value="option3">
                          Lightning Protection Design Services
                        </option>
                        <option value="option3">Installation Services</option>
                        <option value="option3">Project</option>
                        <option value="option3">Export</option>
                        <option value="option3">Consumer</option>
                      </select>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label className="pb-1 text-xs uppercase tracking-wider">
                        Choose options
                      </label>
                      <div className="flex flex-col">
                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="earthingProducts"
                            className="mr-2"
                          />
                          Earthing / Grounding Products
                        </label>

                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="lightningProtectionSystem"
                            className="mr-2"
                          />
                          Lightning Protection System
                        </label>
                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="surgeProtectionDevice"
                            className="mr-2"
                          />
                          Cable Trays
                        </label>
                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="surgeProtectionDevice"
                            className="mr-2"
                          />
                          Metals Exothermic Welding
                        </label>
                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="surgeProtectionDevice"
                            className="mr-2"
                          />
                          Conductors
                        </label>
                        <label className="mb-1">
                          <input
                            type="checkbox"
                            name="checkboxOption"
                            value="surgeProtectionDevice"
                            className="mr-2"
                          />
                          Fastners & Fixing
                        </label>
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="subject"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="subject"
                        autoComplete="subject"
                        placeholder="Subject"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="subject"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        placeholder="Message"
                        className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-6">
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-center text-lg font-semibold text-white shadow-md ring-blue-300 transition hover:bg-blue-800 focus:ring-1 focus:ring-offset-2"
                      type="submit"
                    >
                      Send Message
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

export default ContactPage;

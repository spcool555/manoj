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
    <img src="images/manoj-slider/3.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
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
                  <b style={{ color: "#EA6321" }}>What are the reasons behind our capacity to meet all market demands?</b> <br />
                  The foremost reason is our well-structured infrastructure and experienced technical team. Our operations are driven by state-of-the-art machinery and skilled professionals who ensure high standards in every product and service we offer. With a proud legacy of over 20 years since our establishment in 2003, Manoj Engineering Consultant has built a strong reputation in the market for reliability, quality, and timely delivery, making us a trusted name in the industry.
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
                      A-1,Near, Electronic Zone Hingna, Road Near,Petrol, Pump M.I.D.C., Lokmanya Nagar, Nagpur-440016, Maharashtra, India{" "}
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
                      Utkarsh P. Rathod, 8767474066
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                      Prakash K. Rathod, 9422801983
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail:  manojenggngp@gmail.com
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail:  utkarshrathod04@gmail.com
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
                        Monday - Sunday: 09 AM - 09 PM
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Wednesday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
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
                        htmlFor="number"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="number"
                        id="subject"
                        autoComplete="subject"
                        placeholder="Contact Number"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="contact"
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
                <hr />
  <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.2752879616905!2d78.98741127525858!3d21.101588280566077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA2JzA1LjciTiA3OMKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1745082245526!5m2!1sen!2sin" width="600" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

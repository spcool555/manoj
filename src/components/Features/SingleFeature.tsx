"use client";
import { Feature } from "@/types/feature";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { ApiUrl } from "../Api/apiurl";
import Swal from "sweetalert2";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  const [loading, setLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link navigation
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${ApiUrl}/public/sendenquiry`, {
        name: name,
        mobile: mobile,
        productName: title,
      });
  
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Enquiry Sent!",
          text: "Thank you! We will contact you soon.",
          timer: 2000, // Auto close after 2 seconds (2000 milliseconds)
          timerProgressBar: true, // Shows a progress bar
          showConfirmButton: false, // Hide the OK button
        }).then(() => {
          closeModal();
          setName("");    // Clear form after submit
          setMobile("");
        });
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }finally {
      setLoading(false); // 🔥 Stop loading
    }
  };
  

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
                  <span
                    className="pl-2 pt-2 text-sm group-hover:text-red-600 cursor-pointer"
                    onClick={openModal}
                  >
                    Send Enquiry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Send Enquiry</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded"
                required
              />
             <input
  type="tel"
  placeholder="Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  className="border p-2 rounded"
  required
  pattern="[0-9]{10}"     // 🔥 Only 10 digits
  maxLength={10}           // 🔥 Max 10 digits
  minLength={10}           // 🔥 Min 10 digits
/>

              <input
                type="text"
                value={title}
                readOnly
                className="border p-2 rounded bg-gray-100"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleFeature;

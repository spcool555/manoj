'use client'
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6">

        {/* Left Side - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
  <Image
    src="/images/manoj-slider/manoj.png"
    alt="News"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center rounded-lg"
  />
</div>


        {/* Right Side - Summary */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-[18px] sm:text-3xl font-bold mb-4 text-gray-800">MANOJ ENGINEERING
            CONSULTANT</h1>
            <p className="text-gray-700 mb-4">
            Welcome to Manoj Engineering Consultant – your premier destination for all your homogenizer spare parts and service needs!

At Manoj Engineering Consultant, we understand the critical role that homogenizers play across various industries, from food and beverage to pharmaceuticals and cosmetics. That’s why we’re dedicated to providing top-quality spare parts and expert services to keep your homogenizers running smoothly and efficiently.

Our website offers a comprehensive selection of genuine OEM and aftermarket spare parts for all major homogenizer brands, ensuring compatibility and optimal performance. Whether you need valves, plungers, seals, or any other components, you’ll find them in our extensive catalog.

But we’re more than just a parts supplier — we’re your partner in maximizing the lifespan and performance of your homogenizers. Our team of experienced technicians is available to provide prompt and professional service, including maintenance, repairs, and upgrades.

With our expertise, you can trust that your equipment will operate at peak efficiency, minimizing downtime and maximizing productivity.           </p>
            {/* <p className="text-gray-600 text-sm">
              Published: April 19, 2025 | By: The News Desk
            </p> */}
          </div>
        </div>

      </div>
    </div>
  );
}

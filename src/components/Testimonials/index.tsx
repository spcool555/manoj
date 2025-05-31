'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Kumar,",
    role: "Nagpur",
    content:
      "MEC Homogenizer helped streamline our entire process. The equipment is efficient, reliable, and backed by amazing technical support. Highly recommended for any industrial production unit!",
  },
  {
    name: "Praveen Maan",
    role: "Nawalgarh, Rajasthan",
    content: "Response\n\nQuality\n\nDelivery\n\nHelpful",
  },
  {
    name: "V TECH",
    role: "Bengaluru, Karnataka",
    content: "Good support and detail sharing with timely quote sharing\n\nHelpful",
  },
];

const Testimonial = () => {
  return (

<>

    <section className="bg-black py-16 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Testimonials</h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Stars */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-base italic whitespace-pre-line mb-6">
              "{t.content}"
            </p>

            {/* Name & Role */}
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <section hidden className="p-4 md:p-8">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">GEA Niro Soavi TT-0100 Lubricating Unit – Parts List</h1>
  
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
      <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
        <tr>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Part Code</th>
          <th className="px-4 py-2 border">Item Ref</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 text-sm">
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Moto Flange</td>
          <td className="px-4 py-2 border">110570</td>
          <td className="px-4 py-2 border">A</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Suction Filter 3/4&quot;G Mesh</td>
          <td className="px-4 py-2 border">–</td>
          <td className="px-4 py-2 border">A1</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Body Kit</td>
          <td className="px-4 py-2 border">260912</td>
          <td className="px-4 py-2 border">B</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">By-Pass</td>
          <td className="px-4 py-2 border">261282</td>
          <td className="px-4 py-2 border">C</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Joint</td>
          <td className="px-4 py-2 border">261185</td>
          <td className="px-4 py-2 border">D</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Main Pump Kit</td>
          <td className="px-4 py-2 border">260913</td>
          <td className="px-4 py-2 border">E</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Discharge Manifold Kit TP3</td>
          <td className="px-4 py-2 border">260919/1</td>
          <td className="px-4 py-2 border">F</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Coupling 3/4&quot;G–3/8&quot;G</td>
          <td className="px-4 py-2 border">0133364</td>
          <td className="px-4 py-2 border">G</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Tank Lt. 8 1&quot;G TP3</td>
          <td className="px-4 py-2 border">260915/1</td>
          <td className="px-4 py-2 border">H</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 border">Lubricating Unit TP3 GR 1/6.1</td>
          <td className="px-4 py-2 border">260916/1</td>
          <td className="px-4 py-2 border">I</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

</>
  );
};

export default Testimonial;

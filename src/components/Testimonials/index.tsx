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
  );
};

export default Testimonial;

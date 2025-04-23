import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation} = testimonial;

  const ratingIcons = Array.from({ length: star }).map((_, index) => (
    <span key={index} className="text-yellow">{starIcon}</span>
  ));

  return (
    <div className="w-full h-full">
      <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 dark:bg-dark dark:shadow-gray-800 dark:hover:shadow-white/10">
        {/* Rating and Header */}
      

        {/* Feedback Content */}
        <p className="mb-4 whitespace-pre-line text-base leading-relaxed text-body-color dark:text-white">
          {content}
        </p>

     

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-4 mt-4 flex items-center gap-4">
          {/* Avatar */}
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-base font-semibold text-dark dark:text-white">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;

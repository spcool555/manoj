import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (<>
  <div className="max-w-md mx-auto">
  <div
    className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 text-white">
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
    <div className="relative z-10">
      <svg className="w-12 h-12 mb-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>

      <p className="text-md mb-4">
        &quot;{content}&quot;</p>
      <div className="flex items-center">
      {/* <Image src={image} alt= fill className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"/> */}
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"/>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-purple-200">{designation}</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default SingleTestimonial;

import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Earth Electrode Systems ",
    paragraph:
"In addition to our well-established material supply solutions, we provide comprehensive Electrical Earthing Design Services utilizing advanced CDEGS software to ensure safe and reliable grounding systems.",
    image: "/images/sk/earth-electrode.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Lightning Protection System",
    paragraph:"Our skilled team of Engineers and Technicians specializes in designing Lightning Protection Systems (LPS) in accordance with IEC 62305 standards or applicable local regulations, ensuring maximum safety and compliance.", 
    image: "/images/sk/lightening-arresting.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Surge Protection Solutions",
    paragraph:"We safeguard electrical equipment. Our team utilizes advanced tools such as ETAP & SKM PowerTools to analyze system vulnerabilities & ensure optimal protection solutions are in place, fully compliant with IEC 61643 standards.",
    image: "/images/sk/surge.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

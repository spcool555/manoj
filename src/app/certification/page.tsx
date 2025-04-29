import "./Brands.css";
import { Metadata } from "next";
import Certification from "@/components/Certification";

export const metadata: Metadata = {
  title: "Certification Page | Manoj Engineering Consultant",
  description: "Explore the certifications and quality standards of Manoj Engineering Consultant, ensuring high-quality engineering products and services.",
  keywords: "certifications, engineering products, quality assurance, standards, Manoj Engineering Consultant, manufacturing certifications, quality control",

  robots: "index, follow", // Allows search engines to index and follow links on the page
  openGraph: {
    title: "Certification Page | Manoj Engineering Consultant",
    description: "Explore the certifications and quality standards of Manoj Engineering Consultant, ensuring high-quality engineering products and services.",
    url: "https://www.manojengineering.com/certifications", // Replace with your actual page URL
    type: "website",
    images: "https://mechomogenizer.com/images/logo/official.jpeg", // Replace with actual certification image
  },
  twitter: {
    card: "summary_large_image",
    title: "Certification Page | Manoj Engineering Consultant",
    description: "Explore the certifications and quality standards of Manoj Engineering Consultant, ensuring high-quality engineering products and services.",
    images: "https://mechomogenizer.com/images/logo/official.jpeg", // Replace with actual image for Twitter card
  },
  // Additional metadata can be added as needed
};

const CertificationPage = () => {
  return (
    <>
      <Certification />
    </>
  );
};

export default CertificationPage;

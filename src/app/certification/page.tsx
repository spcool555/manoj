import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import "./Brands.css";
import { Metadata } from "next";
import Certification from "@/components/Certification";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CertificationPage = () => {
  return (
    <>
    
   <Certification/>

    </>
  );
};

export default CertificationPage;

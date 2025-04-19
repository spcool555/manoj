'use client'
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Projectss from "@/components/Projectdata/projectss";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Page | Free Next.js Template for Startup and SaaS",
//   description: "This is About Page for Startup Nextjs Template",
//   // other metadata
// };

const Projects = () => {
  return (
    <>
<Projectss/>
    </>
  );
};

export default Projects;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrixincorporation | Best electrical solutions provider",
  description:
    "Matrixincorporation is a best trusted provider of comprehensive electrical solutions, specializing in Conductors, Earthing Systems, Exothermic Welding, Fasteners & Fixings, Lightning Protection, Cable Trays, Metal Components, Grounding Solutions, Earth Electrode Systems, and Surge Protection Solutions. We deliver reliable and standards-compliant systems to meet diverse industrial and commercial needs.",

  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Blog />
      <Brands />
      {/* <LogoCarousel /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}

      <Contact />
    </>
  );
}

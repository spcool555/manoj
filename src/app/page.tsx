import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NewsPage from "@/components/News/news";
import ProductCarousel from "@/components/Productcarausel";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import AdminPage from "./admin/page";

export const metadata: Metadata = {
  title: "Manoj Engineering Consultant | Homogenizer Parts & Industrial Solutions",
  description:
    "Manoj Engineering Consultant supplies high-quality spare parts for GEA, Tetra Pak, and Niro Soavi homogenizers, including plungers, seals, impact heads, pressure gauges, valve seats, crankshafts, and more. Trusted partner for industrial homogenizer maintenance and inspection solutions.",
  keywords: [
    "GEA homogenizer",
    "GEA homogenizer spare parts",
    "GEA homogenizer plunger",
    "GEA homogenizer plunger seal",
    "GEA impact head",
    "GEA outlet head",
    "GEA impact ring",
    "GEA filter",
    "GEA pressure gauge",
    "GEA crank shaft",
    "GEA gasket",
    "GEA polypac",
    "GEA AAL model",
    "Tetra Pak homogenizer piston",
    "Tetra Pak homogenizer plunger",
    "Tetra Pak pressure gauge",
    "Tetra Pak piston seal",
    "Tetra Pak mushroom valve",
    "Tetra Pak hydraulic parts",
    "Niro Soavi inspection checklist",
    "homogenizer spare parts",
    "homogenizer machine inspection",
    "homogenizer maintenance",
    "valve seat",
    "spring",
    "O-ring",
    "gasket",
    "assembly drawing",
    "valve cover",
    "lubrication unit",
    "heat exchanger",
    "industrial homogenizers"
  ],
  authors: [{ name: "Manoj Engineering Consultant" }],
  generator: "Next.js",
  applicationName: "Manoj Engineering",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <NewsPage />
      <Features />
      <Video />
      <ProductCarousel />
      <Blog />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <Contact />
    </>
  );
}

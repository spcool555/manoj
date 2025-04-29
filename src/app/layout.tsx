"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Inter } from "next/font/google";
import Head from "next/head";
import "react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <title>GEA & Tetra Pak Homogenizer Spare Parts Supplier | Mechomogenizer</title>
        <meta
          name="description"
          content="Leading supplier of GEA, Tetra Pak, and Niro Soavi homogenizer spare parts – including plungers, seals, valves, gaskets, filters, and more."
        />
        <meta
          name="keywords"
          content="GEA homogenizer, Tetra Pak homogenizer parts, Niro Soavi spare parts, homogenizer plunger, homogenizer seal, valve seat, pressure gauge, homogenizer gasket, impact head, polypac"
        />
        <meta name="author" content="Mechomogenizer" />
        <meta property="og:title" content="Mechomogenizer - Homogenizer Spare Parts Supplier" />
        <meta
          property="og:description"
          content="Trusted source for GEA, Tetra Pak, and Niro Soavi homogenizer spares. High-quality parts with fast delivery and support."
        />
        <meta property="og:url" content="https://mechomogenizer.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mechomogenizer.com/images/logo/official.jpeg" />
        <link rel="canonical" href="https://mechomogenizer.com/" />
      </Head>
      <body className="">
        <Header />
        {children}
        <WhatsAppWidget />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

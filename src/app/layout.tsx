"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Providers } from "./providers"; // Move this import to the top
import { Inter } from "next/font/google";
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
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <WhatsAppWidget />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

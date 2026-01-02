"use client";

import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";

import "react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <WhatsAppWidget />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

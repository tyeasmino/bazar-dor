import Footer from "@/components/shared/Footer";
import Marquee from "@/components/shared/Marquee";
import NavbarWrapper from "@/components/shared/NavbarWrapper";
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${notoSerifBengali.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <NavbarWrapper />

        <Marquee />

        {children}

        <Footer />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
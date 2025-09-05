import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike",
  description: "Shop the latest Nike shoes",
};

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased bg-light-100 text-dark-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

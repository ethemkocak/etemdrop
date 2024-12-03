import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Livebar from "./components/Livebar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Etemdrop",
  description: "BEST CASE UNBOXING SIM EVER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#181818]">
        <Navbar />
        <Livebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

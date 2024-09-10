import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body className="bg-gradient-to-b from-purple-900 to-purple-600">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

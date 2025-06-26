import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Sun Media Solutions",
  description: "Discover a flexible workspace that inspires productivity and creativity. Ideal for freelancers, startups, and remote teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans text-center text-gray-800 bg-gradient-to-br from-blue-300 to-pink-300">
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}

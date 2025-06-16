'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-white px-6 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">About</h3>
          <p className="text-gray-400 leading-relaxed text-justify">
            At Sun Media Solutions, we deliver exceptional advertising, event management,
            interior design, and IT solutions that create meaningful and memorable experiences.
          </p>
          <div className="flex space-x-3 mt-5">
            <a href="#" aria-label="Facebook"><Facebook className="bg-black rounded-full p-1 w-8 h-8 hover:bg-white hover:text-black transition" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="bg-black rounded-full p-1 w-8 h-8 hover:bg-white hover:text-black transition" /></a>
            <a href="#" aria-label="Linkedin"><Linkedin className="bg-black rounded-full p-1 w-8 h-8 hover:bg-white hover:text-black transition" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="bg-black rounded-full p-1 w-8 h-8 hover:bg-white hover:text-black transition" /></a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Explore</h3>
          <ul className="text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-white">Our Services</a></li>
            <li><a href="#" className="hover:text-white">Latest Blogs</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Head Office</h3>
          <p className="text-gray-400 leading-relaxed">
            153/A,<br />
            Sun Media Solutions,<br />
            Gannoruwa,<br />
            Peradeniya, 20400
          </p>
        </div>

        {/* City Office */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">City Office</h3>
          <p className="text-gray-400 leading-relaxed">
            5th Lane,<br />
            Colombo 03,<br />
            00300
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} <a href="https://pixeladss.com" className="text-white hover:underline">sunmediasolutions.com</a>. All rights reserved.
          </div>

          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            <img src="/Sun.png" alt="Sun Media Logo" className="h-8 w-auto" />
            <span className="font-semibold text-white">Sun Media Solutions</span>
          </div>

          {/* Links */}
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <span>/</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

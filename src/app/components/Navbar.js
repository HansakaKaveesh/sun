'use client';

import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 text-white py-4 transition-all duration-500">
      <div className="relative flex items-center justify-center w-full">
        {/* Logo */}
        <div
          className={`absolute transition-all duration-500 ${
            scrolled ? 'left-8 top-0' : 'top-2'
          }`}
        >
          <img
  src="/Sun.png"
  alt="Logo"
  className="w-18 h-18 object-contain transition-all duration-500"
/>
        </div>

        {/* Title */}
        <h1
          className={`absolute transition-all duration-500 text-xl font-light ${
            scrolled ? 'right-8 top-4' : 'top-20'
          }`}
        >
          Sun Media
        </h1>

        {/* Nav List */}
        <ul
          className={`flex space-x-8 text-sm font-semibold transition-all duration-500 ${
            scrolled ? 'mt-5 mb-5' : 'mt-30'
          }`}
        >
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Workspace</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline cursor-pointer">Contact</li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

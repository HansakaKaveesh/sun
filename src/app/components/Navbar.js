'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { FaTwitter, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Services data
  const services = [
    { title: "Web Design", description: "Stunning, responsive websites", href: "/services/web-design" },
    { title: "Graphic Design", description: "Captivating visual content", href: "/services/graphic-design" },
    { title: "Social Media", description: "Engagement-driven strategies", href: "/services/social-media" },
    { title: "Digital Marketing", description: "Data-driven campaigns", href: "/services/digital-marketing" },
    { title: "Brand Strategy", description: "Cohesive brand identity", href: "/services/brand-strategy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesMobileOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-md shadow-xl py-3'
          : 'bg-black/0 py-4'
      } text-white px-4`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={() => {
              setIsMenuOpen(false);
              setIsServicesOpen(false);
            }}
          >
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="relative w-12 h-12"
            >
              
              <img 
                src="/Sun.png" 
                alt="Logo" 
                className="relative w-12 h-12 object-contain drop-shadow-lg"
              />
            </motion.div>
            <motion.span 
              className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Sun Media Solutions
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About Us</NavItem>
            
            {/* Services Dropdown */}
            <li 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-white hover:text-yellow-400 transition-colors py-2 px-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                {isServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 rounded-xl overflow-hidden shadow-2xl z-50"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-1">
                      <div className="bg-gradient-to-b from-yellow-500/5 to-transparent p-4 rounded-xl">
                        <h3 className="text-yellow-400 font-bold text-sm mb-2">OUR SERVICES</h3>
                        <ul className="space-y-2">
                          {services.map((service, index) => (
                            <motion.li
                              key={service.title}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={service.href}
                                className="flex items-start p-3 rounded-lg hover:bg-gray-800/50 transition-all group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5"></div>
                                    <span className="font-medium text-white group-hover:text-yellow-400 transition-colors">
                                      {service.title}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-xs mt-1 pl-4">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            
            <li>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter size={18} className="text-white" />
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-4">
                <ul className="flex flex-col space-y-4 text-sm font-medium">
                  <MobileNavItem href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavItem>
                  <MobileNavItem href="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavItem>
                  
                  {/* Mobile Services Dropdown */}
                  <li>
                    <button 
                      className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
                      onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                    >
                      <span className="text-white">Services</span>
                      {isServicesMobileOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    
                    <AnimatePresence>
                      {isServicesMobileOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2 border-l border-gray-800 pl-4"
                        >
                          {services.map(service => (
                            <motion.li
                              key={service.title}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="border-l-2 border-yellow-500/30 pl-3 py-1.5"
                            >
                              <Link
                                href={service.href}
                                className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsServicesMobileOpen(false);
                                }}
                              >
                                <div className="font-medium">{service.title}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  
                  <MobileNavItem href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</MobileNavItem>
                  <MobileNavItem href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavItem>
                  
                  <li className="pt-4">
                    <a 
                      href="https://twitter.com/yourhandle" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    >
                      <FaTwitter /> Follow us
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Reusable NavItem component
const NavItem = ({ href, children }) => (
  <li>
    <Link 
      href={href} 
      className="relative text-white hover:text-yellow-400 transition-colors py-2 px-1 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);

// Reusable MobileNavItem component
const MobileNavItem = ({ href, onClick, children }) => (
  <li>
    <Link 
      href={href} 
      className="block py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);
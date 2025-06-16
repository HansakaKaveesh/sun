'use client';

import { useEffect, useState } from 'react';

const backgroundImages = [
  '/newad1.png',
  '/newad2.png'
];
// Update with your actual image paths
const services = [
  'Brand Strategy',
  'Creative Campaigns',
  'Social Media Management',
  'Content Creation',
  'Digital Advertising',
  'Visual Design',
];

// Sample client logos (update paths as needed)
const clientLogos = [
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
  '/logo1.jpg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentWord = services[wordIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setTypedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % services.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => {
          setTypedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenWords);
      }
    }
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      className="relative bg-cover bg-center h-screen transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-16">
        <div className="text-white text-left w-full max-w-md sm:max-w-lg md:max-w-none md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Build Brands That Stand Out</h1>
          <p className="text-lg md:text-3xl mb-4 font-medium">
            Experts in{' '}
            <span className="border-b-2 border-orange-400 animate-pulse">
              {typedText}
              <span className="inline-block w-1 bg-white ml-1 animate-blink" />
            </span>
          </p>
          <p className="text-base md:text-lg mb-8">
            Partner with a creative agency that combines data, design, and strategy to make brands unforgettable.
          </p>
          <a
            href="#services"
            className="bg-orange-500 hover:bg-orange-600 transition-colors py-3 px-6 rounded-md text-white font-semibold"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* Client Logos Bar */}
      <div className="absolute bottom-0 w-full bg-black/30 py-4">
        <div className="overflow-hidden relative">
          <div className="animate-slide whitespace-nowrap flex items-center gap-12 px-4">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all"

              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

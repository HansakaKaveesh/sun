'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'; // For animations

const images = [
  { src: '/Rajagiriya.png', alt: 'Client work in Rajagiriya' },
  { src: '/Post Texttile FB.png', alt: 'Textile project showcase' },
  { src: '/Nuwara Eliya - Kandy.png', alt: 'Nuwara Eliya to Kandy project' },
  { src: '/Towards Kandy.png', alt: 'Towards Kandy project' },
  { src: '/battaramulla.png', alt: 'Battaramulla client work' },
  { src: '/Rajagiriya.png', alt: 'Another Rajagiriya project' },
  { src: '/Post Texttile FB.png', alt: 'Textile project showcase repeat' },
  { src: '/Nuwara Eliya - Kandy.png', alt: 'Nuwara Eliya to Kandy repeat' },
  { src: '/Towards Kandy.png', alt: 'Towards Kandy repeat' },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function AmazingClients() {
  return (
    <section className="bg-[#0a0a23] py-20 px-4 overflow-hidden">
      {/* Section Header with Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          A selection of work for our <br />
          <span className="relative inline-block">
            <span className="text-white underline decoration-pink-500 decoration-4 underline-offset-8">
              amazing clients
            </span>
            {/* Animated underline effect */}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-pink-500 transition-all duration-500 group-hover:w-full" />
          </span>
        </h2>
        <div className="mt-6 animate-bounce">
          <span className="text-white text-3xl md:text-4xl">⌄</span>
        </div>
      </motion.div>

      {/* Image Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group"
            variants={itemVariants}
            whileHover="hover"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 group-hover:scale-110"
                loading="lazy" // Improve performance with lazy loading
              />
              {/* Overlay for better readability and hover effect */}
              
            </div>

            {/* Caption on Hover */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white py-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm md:text-base font-medium">{image.alt}</p>
            </div>

            {/* Accessibility: Screen Reader Text */}
            <span className="sr-only">{image.alt}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#portfolio"
          className="inline-block px-8 py-4 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          View Full Portfolio
        </a>
      </motion.div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion'; // For animations
import {
  FaPrint,
  FaBullhorn,
  FaBuilding,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
} from 'react-icons/fa';

const services = [
  {
    title: 'Digital Printing',
    icon: <FaPrint size={28} />,
    image: '/images/digital-priniting.jpg',
    description: 'High-quality digital printing services for all your needs.',
  },
  {
    title: 'Billboards',
    icon: <FaBullhorn size={28} />,
    image: '/images/billboards.jpg',
    description: 'Eye-catching billboard designs to boost your brand visibility.',
  },
  {
    title: 'Cladding Signage',
    icon: <FaBuilding size={28} />,
    image: '/images/12.jpg',
    description: 'Durable and stylish cladding signage for your business.',
  },
  {
    title: 'Light Boxes Name Boards',
    icon: <FaLightbulb size={28} />,
    image: '/images/light box.jpg',
    description: 'Illuminated name boards to make your brand shine.',
  },
  {
    title: 'Graphic Designing',
    icon: <FaPencilRuler size={28} />,
    image: '/images/graphic-designer.jpg',
    description: 'Creative graphic design solutions for all industries.',
  },
  {
    title: 'Web Development',
    icon: <FaCode size={28} />,
    image: '/images/Post frithcode FB.png',
    description: 'Modern and responsive web development services.',
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0a0a23] text-center overflow-hidden">
      {/* Section Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }} // Staggered animation for each card
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy" // Improve performance with lazy loading
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
            </div>

            {/* Icon */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white z-10">
              {service.icon}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white py-6 px-6 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>

            {/* Accessibility: Screen Reader Text */}
            <span className="sr-only">{service.description}</span>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Explore All Services
        </a>
      </motion.div>
    </section>
  );
}
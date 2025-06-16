'use client';

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
  },
  {
    title: 'Billboards',
    icon: <FaBullhorn size={28} />,
    image: '/images/billboards.jpg',
  },
  {
    title: 'Cladding Signage',
    icon: <FaBuilding size={28} />,
    image: '/images/12.jpg',
  },
  {
    title: 'Light Boxes Name Boards',
    icon: <FaLightbulb size={28} />,
    image: '/images/light box.jpg',
  },
  {
    title: 'Graphic Designing',
    icon: <FaPencilRuler size={28} />,
    image: '/images/graphic-designer.jpg',
  },
  {
    title: 'Web Development',
    icon: <FaCode size={28} />,
    image: '/images/Post frithcode FB.png',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0a0a23] text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* Icon */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              {service.icon}
            </div>

            {/* Title */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white py-4 px-6 text-xl font-semibold backdrop-blur-sm transition-opacity duration-300 group-hover:backdrop-blur-md">
              {service.title}
            </div>

            {/* Overlay (optional: you can remove if not needed) */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

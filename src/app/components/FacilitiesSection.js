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
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 group-hover:brightness-90 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md text-blue-600 z-10">
              {service.icon}
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
              <h3 className="text-white text-2xl font-semibold drop-shadow-md px-4">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const works = [
  {
    title: 'Billboard Campaign',
    image: '/Nuwara Eliya - Kandy.png',
    category: 'Outdoor Advertising',
  },
  {
    title: 'Website Redesign',
    image: '/Post Texttile FB.png',
    category: 'Web Development',
  },
  {
    title: 'Light Box Designs',
    image: '/light box.jpg',
    category: 'Signage',
  },
  {
    title: 'Brand Identity',
    image: '/graphic-designer.jpg',
    category: 'Graphic Design',
  },
  {
    title: 'Digital Printing',
    image: '/digital-priniting.jpg',
    category: 'Printing',
  },
  {
    title: 'Social Campaign',
    image: '/Ads-In-Times-Square-840x560.jpg',
    category: 'Marketing',
  },
  {
    title: 'Vehicle Wrap Design',
    image: '/vehicle-wrap.jpg',
    category: 'Outdoor Advertising',
  },
  {
    title: 'E-commerce Platform',
    image: '/ecommerce.jpg',
    category: 'Web Development',
  },
  {
    title: 'Trade Show Booth',
    image: '/trade-show.jpg',
    category: 'Signage',
  },
];

export default function OurWorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(works.map(work => work.category))];

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <section className="bg-[#0a0a23] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Creative Portfolio
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our diverse range of successful projects crafted with passion and expertise
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-[#1a1a2e] text-gray-300 hover:bg-[#26264e]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.article
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full mb-3">
                      {work.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{work.title}</h3>
                  </div>
                  <button className="w-full py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition">
                    View Project
                  </button>
                </div>
              </div>

              {/* Always visible info on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent lg:hidden">
                <span className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-medium rounded mb-1">
                  {work.category}
                </span>
                <h3 className="text-sm font-semibold text-white">{work.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import {
  Printer,
  Image as ImageIcon,
  Building2,
  Lightbulb,
  Palette,
  Code2,
} from 'lucide-react';

const services = [
  {
    title: 'Digital Printing',
    description: 'High-quality digital printing for all your business needs.',
    icon: Printer,
  },
  {
    title: 'Billboards',
    description: 'Design and production of large format billboards.',
    icon: ImageIcon,
  },
  {
    title: 'Cladding Signage',
    description: 'Durable and modern cladding signage solutions.',
    icon: Building2,
  },
  {
    title: 'Light Boxes Name Boards',
    description: 'Illuminated boards to make your brand shine.',
    icon: Lightbulb,
  },
  {
    title: 'Graphic Designing',
    description: 'Creative design services to match your brand’s identity.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    description: 'Modern and responsive websites for your business.',
    icon: Code2,
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#0a0a23] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-300 text-lg">
          We specialize in a range of creative and technical services to grow your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1a1a2e] to-[#1f1f3a] hover:from-[#26264e] hover:to-[#2e2e5a] 
              rounded-2xl p-8 text-center shadow-lg transition-transform transform 
              duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center items-center mb-6">
                <Icon className="w-12 h-12 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
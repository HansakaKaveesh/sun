'use client'

import {
  Printer,
  Image,
  PackageCheck
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  FaPaintRoller,
  FaTshirt,
  FaBusinessTime,
  FaTruck
} from 'react-icons/fa'

export default function DigitalPrintingPage() {
  const services = [
    {
      title: 'Business Printing',
      desc: 'High-quality business cards, flyers, brochures, and all essential print materials.',
      icon: <FaBusinessTime className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Large Format Prints',
      desc: 'Banners, posters, signage, and wide-format visuals for indoor or outdoor use.',
      icon: <Image className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Custom Merchandise',
      desc: 'Bring designs to life on t-shirts, mugs, tote bags and more.',
      icon: <FaTshirt className="w-8 h-8 text-pink-400" />
    }
  ]

  const printingTechniques = [
    { name: 'Offset Printing', icon: FaPaintRoller },
    { name: 'Digital Printing', icon: Printer },
    { name: 'Screen Printing', icon: FaTshirt },
    { name: 'UV Print', icon: PackageCheck },
    { name: 'Same-Day Delivery', icon: FaTruck }
  ]

  const projects = [
    {
      name: 'BrandPro Business Kit',
      desc: 'Custom letterheads, envelopes, and business cards for a corporate client.',
      image: 'https://picsum.photos/seed/print1/600/400',
      url: '#'
    },
    {
      name: 'Event Banners – Expo 2025',
      desc: 'Large promotional banners printed with UV-resistant inks for outdoor use.',
      image: 'https://picsum.photos/seed/print2/600/400',
      url: '#'
    },
    {
      name: 'Merch Pack for Local Artist',
      desc: 'T-shirts, stickers, and tote bags with custom illustrations.',
      image: 'https://picsum.photos/seed/print3/600/400',
      url: '#'
    }
  ]

  return (
    <div className="bg-[#0a0a23] text-white px-6 lg:px-24 py-20">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-sm uppercase tracking-widest text-pink-400 bg-pink-900/20 px-4 py-1 rounded-full mb-5">
          Premium Digital Printing
        </span>
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
          Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">Prints That Speak Louder</span><br />
          Than Words
        </h1>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          We specialize in high-impact, high-resolution printing solutions
          for businesses, events, and creatives. Get it custom, bold, and fast.
        </p>
        <a
          href="#services"
          className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
          aria-label="Explore printing services"
        >
          Explore Services
        </a>
      </section>

      {/* Services Offered */}
      <section id="services" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#13132d] p-6 rounded-2xl shadow-md hover:shadow-pink-500/20 transition duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Printing Techniques */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Techniques & Capabilities
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {printingTechniques.map(({ name, icon: Icon }, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1f1f3b] hover:bg-[#2a2a4f] transition"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Our Works */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#13132d] rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-pink-400 hover:underline text-sm"
                    aria-label={`Visit project: ${project.name}`}
                  >
                    View Sample →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Print Your Vision</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          From business essentials to creative campaigns — we bring your ideas into vivid, tangible reality. Lets make something incredible.
        </p>
        <a
          href="/contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl font-medium transition"
          aria-label="Contact us for printing services"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
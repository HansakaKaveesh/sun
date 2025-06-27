'use client'

import {
  Code,
  MonitorSmartphone,
  Server
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVercel
} from 'react-icons/si'

export default function WebDevelopmentPage() {
  const services = [
    {
      title: 'Frontend Development',
      desc: 'Beautiful, responsive, and interactive UI using modern frameworks.',
      icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Backend Development',
      desc: 'Scalable APIs and secure server-side logic with Node.js & databases.',
      icon: <Server className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Full Stack Solutions',
      desc: 'Complete systems with both frontend and backend integration.',
      icon: <Code className="w-8 h-8 text-yellow-400" />
    }
  ]

  const techStack = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React.js', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Vercel', icon: SiVercel },
  ]

  const projects = [
    {
      name: 'StartupX Landing Page',
      desc: 'A sleek, animated product landing page built with Next.js, Tailwind CSS, and Framer Motion.',
      image: 'https://picsum.photos/seed/startupx/600/400',
      url: 'https://startupx.com',
    },
    {
      name: 'EduPro LMS Platform',
      desc: 'Scalable LMS with dashboards & quizzes built using the MERN stack.',
      image: 'https://picsum.photos/seed/edupro/600/400',
      url: 'https://edupro.io',
    },
    {
      name: 'ShopFlex E-commerce',
      desc: 'Optimized e-commerce platform integrating Stripe, Firebase and dynamic carts.',
      image: 'https://picsum.photos/seed/shopflex/600/400',
      url: 'https://shopflex.dev',
    }
  ]

  return (
    <div className="bg-[#0a0a23] text-white px-6 lg:px-24 py-20">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-sm uppercase tracking-widest text-blue-400 bg-blue-900/20 px-4 py-1 rounded-full mb-5">
          Professional Web Services
        </span>

        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Modern Web Applications</span><br />
          With Performance & Purpose
        </h1>

        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          We craft high-quality, scalable, and user-centric web solutions using the latest technologies like 
          <strong className="text-white"> Next.js, React, and Node.js</strong>. 
          Whether you’re a startup or enterprise — we turn your idea into digital reality.
        </p>

        <a
          href="#services"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
          aria-label="Explore our web development services"
        >
          Explore Services
        </a>
      </section>

      {/* Services Offered */}
      <section id="services" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#13132d] p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 transition duration-300"
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

      {/* Tech Stack */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {techStack.map(({ name, icon: Icon }, index) => (
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

      {/* Our Projects */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Projects</h2>
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 hover:underline text-sm"
                  aria-label={`Visit ${project.name}`}
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Amazing</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Whether it’s a startup or an enterprise-grade app, we deliver scalable,
          efficient software — and partner in your growth journey.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition"
          aria-label="Get in touch to build your web application"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
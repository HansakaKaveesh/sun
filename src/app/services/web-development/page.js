'use client'

import {
  Code,
  MonitorSmartphone,
  Server,
  Users,
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
      icon: <MonitorSmartphone className="w-10 h-10 text-blue-400" />
    },
    {
      title: 'Backend Development',
      desc: 'Scalable APIs and secure server-side logic with Node.js & databases.',
      icon: <Server className="w-10 h-10 text-green-400" />
    },
    {
      title: 'Full Stack Solutions',
      desc: 'Complete systems with both frontend and backend integration.',
      icon: <Code className="w-10 h-10 text-yellow-400" />
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
    { name: 'Vercel', icon: SiVercel }
  ]

  const projects = [
    {
      name: 'StartupX Landing Page',
      desc: 'A sleek, animated product landing page built with Next.js, Tailwind CSS, and Framer Motion.',
      image: 'https://picsum.photos/seed/startupx/600/400',
      url: 'https://startupx.com'
    },
    {
      name: 'EduPro LMS Platform',
      desc: 'Scalable LMS with dashboards & quizzes built using the MERN stack.',
      image: 'https://picsum.photos/seed/edupro/600/400',
      url: 'https://edupro.io'
    },
    {
      name: 'ShopFlex E-commerce',
      desc: 'Optimized e-commerce platform integrating Stripe, Firebase and dynamic carts.',
      image: 'https://picsum.photos/seed/shopflex/600/400',
      url: 'https://shopflex.dev'
    }
  ]

  const team = [
    {
      name: 'Alice Johnson',
      role: 'Frontend Developer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'David Smith',
      role: 'Backend Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emma Hayes',
      role: 'UI/UX Designer',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Leo Carter',
      role: 'Project Manager',
      avatar: 'https://randomuser.me/api/portraits/men/49.jpg'
    }
  ]

  return (
    <div className="bg-[#0a0a23] text-white px-4 sm:px-6 lg:px-24 py-16 sm:py-20 font-sans">

{/* Hero Section */}
<section className="max-w-5xl mx-auto text-center px-2 sm:px-6">
  <motion.span
    className="inline-block text-xs uppercase tracking-wider text-blue-400 bg-blue-900/10 px-4 py-1 rounded-full mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Professional Web Services
  </motion.span>

  <motion.h1
    className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Build{' '}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      Modern Web Applications
    </span>{' '}
    <br />
    With Performance & Purpose
  </motion.h1>

  <motion.p
    className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    We craft high-quality, scalable, and user-centric web solutions using{' '}
    <span className="text-white font-semibold">Next.js, React, Node.js</span> and
    more. Whether you’re a startup or enterprise — we turn your idea into digital reality.
  </motion.p>

  <motion.a
    href="#services"
    className="inline-block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 sm:py-3.5 rounded-xl font-medium transition min-h-[44px]"
    whileHover={{ scale: 1.05 }}
  >
    Explore Services
  </motion.a>
</section>


{/* About Section */}
<section className="mt-24 md:mt-32 max-w-7xl mx-auto px-4 sm:px-8">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16"
  >
    <div className="lg:w-1/2 text-center lg:text-left">
      <img
        src="/frithcode.png"
        alt="Company Logo"
        loading="lazy"
        className="mb-6 w-32 sm:w-40 h-auto mx-auto lg:mx-0 object-contain"
      />
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug">
        Empowering Brands with <br className="hidden md:block" />
        Custom Digital Solutions
      </h2>
      <p className="text-sm sm:text-base text-gray-400 mb-4">
        We’re a passionate team of developers, designers, and strategists focused
        on building best-in-class digital products tailored for growth.
      </p>
      <p className="text-yellow-400 font-medium">
        In all projects, we proudly collaborate with{' '}
        <span className="underline">Frithcode Technologies</span>.
      </p>
    </div>

    <div className="lg:w-1/2 w-full">
      <img
        src="/about web.png"
        alt="Team working on web project"
        loading="lazy"
        className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-lg"
      />
    </div>
  </motion.div>
</section>


{/* Services Section */}
<section id="services" className="mt-20 sm:mt-24">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">What We Do</h2>
  <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {services.map((item, idx) => (
      <motion.div
        key={idx}
        className="bg-[#13132d] p-6 sm:p-8 rounded-2xl shadow-md border border-gray-800 hover:shadow-blue-500/30 transition duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


{/* Tech Stack */}
<section className="mt-24">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Technologies We Use</h2>
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm text-gray-300">
    {techStack.map(({ name, icon: Icon }, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f1f3b] hover:bg-[#2a2a4f] hover:text-white transition-all shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <Icon className="w-5 h-5 text-blue-400" />
        {name}
      </motion.div>
    ))}
  </div>
</section>


{/* Projects Section */}
<section className="mt-24">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Recent Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="bg-[#13132d] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.025] transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="h-48 bg-gray-800 relative">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{project.desc}</p>
          <a
            href={project.url}
            className="text-blue-400 hover:underline text-sm"
            aria-label={`Visit project: ${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website →
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>


{/* Team Section */}
<section className="mt-24">
  <motion.h2
    className="text-2xl sm:text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Users className="w-6 h-6 text-blue-400" />
    Meet Our Team
  </motion.h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {team.map((member, index) => (
      <motion.div
        key={index}
        className="bg-[#13132d] rounded-xl text-center p-6 shadow-md hover:shadow-blue-500/30 transition-transform hover:scale-105"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <img
          src={member.avatar}
          alt={member.name}
          loading="lazy"
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h3 className="font-semibold text-base sm:text-lg">{member.name}</h3>
        <p className="text-blue-400 text-xs sm:text-sm">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>


{/* CTA Section */}
<section className="mt-24 sm:mt-32 text-center px-4">
  <motion.h2
    className="text-2xl sm:text-3xl font-bold mb-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Let’s Build Something Amazing
  </motion.h2>
  <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-xl mx-auto">
    Partner with us to create fast, modern, and powerful web experiences — from MVPs to enterprise solutions.
  </p>
  <a
    href="/contact"
    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-medium transition min-h-[44px]"
    aria-label="Contact us for a web development project"
  >
    Contact Us
  </a>
</section>

    </div>
  )
}
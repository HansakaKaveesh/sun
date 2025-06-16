'use client';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChartLine, FaMedal } from 'react-icons/fa';

export default function AboutSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0a0f2e] to-[#1a1f40] px-6 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' 
                : i % 3 === 1 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' 
                  : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
              width: `${Math.random() * 100 + 10}px`,
              height: `${Math.random() * 100 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="uppercase text-sm tracking-[0.2em] text-blue-400 font-medium">
              Our Story
            </span>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Creativity</span> Meets Innovation
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        
        {/* Content section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Images */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 aspect-square transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
              </div>
              
              <div className="relative group mt-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 aspect-square transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 shadow-xl w-40">
              <div className="flex items-center gap-2">
                <div className="bg-blue-400/20 p-2 rounded-lg">
                  <FaUsers className="text-white" />
                </div>
                <div>
                  <p className="text-white text-xl font-bold">25+</p>
                  <p className="text-cyan-100 text-xs">Team Members</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Space For Creative Minds
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              At Sun Media Solutions, we believe in the transformative power of creativity. Our team of innovative thinkers and digital artisans craft experiences that captivate audiences and drive meaningful results.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We blend strategic insight with artistic vision to create digital solutions that not only look stunning but also deliver measurable impact. Our approach combines cutting-edge technology with human-centered design to solve complex challenges.
            </motion.p>
            
            {/* Stats grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: <FaLightbulb className="text-yellow-400" size={24} />, value: "250+", label: "Projects" },
                { icon: <FaUsers className="text-blue-400" size={24} />, value: "98%", label: "Satisfaction" },
                { icon: <FaChartLine className="text-green-400" size={24} />, value: "5x", label: "Growth" },
                { icon: <FaMedal className="text-amber-400" size={24} />, value: "15+", label: "Awards" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center"
                  variants={fadeInUp}
                >
                  <div className="flex justify-center mb-2">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="relative z-10">Our Journey</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating team section */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Creative Minds</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our diverse team of designers, developers, and strategists bring unique perspectives to every project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Alex Morgan", role: "Creative Director" },
            { name: "Taylor Swift", role: "Lead Designer" },
            { name: "Jordan Smith", role: "UX Strategist" },
            { name: "Casey Johnson", role: "Tech Lead" }
          ].map((member, index) => (
            <motion.div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30">
                <div className="bg-gray-900 rounded-xl overflow-hidden aspect-square">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors cursor-pointer">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
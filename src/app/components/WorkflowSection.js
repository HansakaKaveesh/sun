'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StickyContentSection() {
  const features = [
    {
      title: 'Powerful Dashboard',
      desc: 'Visualize your data with interactive charts and real-time insights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Collaboration Tools',
      desc: 'Invite team members and manage permissions easily.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Customizable Workflows',
      desc: 'Design workflows that match your business needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: 'Advanced Analytics',
      desc: 'Track performance and generate detailed reports.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0a0a23] text-white py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Optimize Your Workflow
          </h1>
          <p className="mt-5 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover powerful tools designed to streamline operations, enhance collaboration, 
            and drive productivity for teams of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sticky Image Container with Device Frame */}
          <div className="sticky top-28 self-start hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-2xl transform rotate-1"></div>
              <Image
                src="/12.jpg"
                alt="Product Screenshot"
                width={600}
                height={800}
                className="relative rounded-2xl shadow-2xl border border-gray-700/50"
              />
              
              {/* Device Frame Elements */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gray-600/50"></div>
            </div>
          </div>

          {/* Animated Content Section */}
          <div className="space-y-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#1f1f3a] border border-gray-800 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ 
                  y: -5,
                  borderColor: 'rgba(99, 102, 241, 0.5)',
                  backgroundColor: '#1f1f3a'
                }}
              >
                {/* Feature Number */}
                <div className="flex-shrink-0 mr-5 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                  <div className="text-indigo-400">
                    {feature.icon}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-mono text-indigo-400 mr-3">0{i+1}</span>
                    <h2 className="text-xl font-bold text-white">{feature.title}</h2>
                  </div>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600/30 to-blue-700/30 border border-indigo-500/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your workflow?</h3>
              <p className="text-indigo-200 mb-5">
                Join thousands of teams already boosting their productivity with our platform.
              </p>
              <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/30">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
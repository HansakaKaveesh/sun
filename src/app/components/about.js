'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function CustomSection() {
  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side Image */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[450px]">
            <Image
              src="/about.png"
              alt="Project Showcase"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Creative Web Agency <br />
            <span className="text-white">Delivering <span className="text-cyan-400">Custom Solutions</span></span>
          </h2>

          <ul className="mt-8 space-y-5 text-lg">
            <li>
              <span className="text-cyan-400 font-semibold">✔️ Custom Web Design Solutions</span>
              <span className="text-white"> to Drive Conversions</span>
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">✔️ Effective Marketing Campaigns</span>
              <span className="text-white"> to Generate Growth</span>
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">✔️ Tailored Branding Strategies</span>
              <span className="text-white"> to Drive Engagement</span>
            </li>
          </ul>

          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            Digital Silk is a web design company & digital marketing agency focused on growing brands online.
            We create effective brand strategies, custom web design, development, and digital marketing solutions
            to generate greater brand engagement and conversions.
          </p>

          {/* Video Preview */}
          <div className="mt-10 flex items-center space-x-4">
            <div className="w-40 h-24 relative rounded-lg overflow-hidden shadow-md group">
              <Image
                src="/video-thumbnail.jpg"
                alt="Video Thumbnail"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <PlayCircle className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 rounded-md text-white shadow-md">
              <p className="font-semibold">See Our Work In Action</p>
              <span className="text-sm text-gray-200">1 MINUTE</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';

export default function LogoCloud() {
  const logos = [
    { name: 'Raja', src: '/Asset-1-2.jpg' },
    { name: 'Amazon', src: '/singale logo.png' },
    { name: 'Microsoft', src: '/Sun.png' },
    { name: 'a', src: '/Asset-1-2.jpg' },


  ];

  return (
    <section className="bg-[#0a0a23] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Trusted by Leading Brands
        </h2>
        <p className="mt-2 text-gray-400">
          We collaborate with the most innovative companies in the world.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={`${logo.name} logo`}
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

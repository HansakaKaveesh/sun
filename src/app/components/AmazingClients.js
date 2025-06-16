'use client';

import Image from 'next/image';

const images = [
  '/Rajagiriya.png',
  '/Post Texttile FB.png',
  '/Nuwara Eliya - Kandy.png',
  '/Towards Kandy.png',
  '/battaramulla.png',
  '/Rajagiriya.png',
  '/Post Texttile FB.png',
  '/Nuwara Eliya - Kandy.png',
  '/Towards Kandy.png',
];

export default function AmazingClients() {
  return (
    <section className="bg-[#0a0a23] py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
          A selection of work for our <br />
          <span className="text-white underline decoration-pink-500 decoration-4 underline-offset-8">
            amazing clients
          </span>
        </h2>
        <div className="mt-4 animate-bounce">
          <span className="text-white text-3xl">⌄</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500"
          >
            <Image
              src={src}
              alt={`Client work ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}

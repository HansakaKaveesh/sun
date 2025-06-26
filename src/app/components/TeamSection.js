'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Kaushani Weerasinghe',
    role: 'Founder & Managing Partner',
    image: '/Meet/Kaushani Weerasinghe.jpg',
  },
  {
    name: 'Ishan Fernando',
    role: 'Managing Partner',
    image: '/Meet/Ishan Fernando.jpg',
  },
  {
    name: 'Sameera Weerasinghe',
    role: 'Accountant',
    image: '/Meet/Sameera Weerasinghe.jpg',
  },
  {
    name: 'Shanika Weerasinghe',
    role: 'Documentation Manager',
    image: '/Meet/Shanika Weerasinghe.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#0a0a23] py-20 px-6 lg:px-24 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

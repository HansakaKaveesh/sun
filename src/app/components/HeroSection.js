import { FaPhone } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 min-h-screen">
      <h3 className="text-sm md:text-base font-light">Modern Office Spaces</h3>
      <h1 className="text-4xl md:text-6xl font-bold my-4">Coworking Space</h1>
      <p className="max-w-md text-sm md:text-base text-gray-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <div className="flex items-center gap-2 my-6">
        <FaPhone />
        <span className="text-lg">(262) 990 9997</span>
      </div>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition">
        Book A Tour
      </button>
    </section>
  );
}

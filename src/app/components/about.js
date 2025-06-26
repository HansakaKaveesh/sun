// components/AboutUs.jsx

export default function AboutUs() {
  return (
    <section className="bg-[#0a0a23] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="overflow-hidden ">
          <img
            src="/about.png" // replace with your image path
            alt="About us"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            About Our Company
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We are dedicated to providing the best services and solutions tailored to your needs. 
            Our expert team works with passion and innovation to deliver outstanding results.
          </p>
          <p className="text-gray-400 mb-6">
            Founded in 2020, we have helped hundreds of clients succeed in their businesses 
            with creative and effective strategies.
          </p>
          <button className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

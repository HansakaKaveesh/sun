export default function AboutSection() {
  return (
    <section className="bg-[#f5f7fb] text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Space For Creative Minds</h2>
        <div className="w-20 h-[2px] bg-gray-300 mx-auto mb-6" />
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto mb-10">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
          className="w-full md:w-1/2 rounded shadow"
        />
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
          alt="Workspace"
          className="w-full md:w-1/2 rounded shadow"
        />
      </div>

      <div className="max-w-3xl mx-auto text-gray-600 mb-8 px-4">
        <p>
          Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident.
        </p>
      </div>

      <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
        Read More
      </button>
    </section>
  );
}

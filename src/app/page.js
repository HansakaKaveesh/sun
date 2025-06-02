import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/about';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/about';
import Facilities from './components/FacilitiesSection';
import AmazingClients from './components/AmazingClients';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white font-sans">
      <Navbar />
      <HeroSection />
      <Facilities />
      <AboutSection />
      <AmazingClients />
      <Footer />
    </main>
  );
}

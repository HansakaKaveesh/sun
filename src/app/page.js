import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/about';
import Facilities from './components/FacilitiesSection';
import AmazingClients from './components/AmazingClients';
import LogoCloud from './components/LogoCloud';
import WorkflowSection  from './components/WorkflowSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Facilities />
      <WorkflowSection />
      <AmazingClients />
      <TeamSection />
      <LogoCloud />
      <Footer />
    </main>
  );
}

import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';
import ServicesSection from './components/servicesSection/srevicesSection';
import WorksSection from './components/worksSection/worksSection';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <WorksSection />
    </main>
  );
}

import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';
import ResumeSection from './components/resumeSection/resumeSection';
import ServicesSection from './components/servicesSection/srevicesSection';
import SkillSection from './components/skillSection/skillSection';
import WorksSection from './components/worksSection/worksSection';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <SkillSection />
      {/* <WorksSection /> */}
    </main>
  );
}

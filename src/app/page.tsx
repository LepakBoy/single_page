import Image from 'next/image';
import styles from './page.module.css';
import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';
import BadgeSection from './components/badgeSection/badgeSection';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
    </main>
  );
}

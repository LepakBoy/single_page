import Image from 'next/image';
import styles from './page.module.css';
import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
    </main>
  );
}

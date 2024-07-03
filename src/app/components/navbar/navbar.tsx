'use client';

import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import ItemLink from './itemLink/itemLink';
import Link from 'next/link';

export default function Navbar() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScroll(scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${scroll >= 120 ? styles.sticky : styles.container}`}>
      <div className={styles.badge}>
        <Link
          href="/"
          className={styles.logo}
        >
          Logo
        </Link>
        <span className={styles.email_badge}>amdfikri35@gmail.com</span>
      </div>
      <ItemLink />
    </nav>
  );
}

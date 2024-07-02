import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Design by :
      <Link
        className={styles.link}
        href="https://themejunction.net/html/gerold/demo/"
        target="__blank"
      >
        Gerold Design
      </Link>
    </footer>
  );
}

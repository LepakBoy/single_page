import React from 'react';
import styles from './navbar.module.css';
import ItemLink from './itemLink/itemLink';
import MobileLink from './mobileLink/mobileLink';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <div className={styles.logo}>Logo</div>
        <span className={styles.email_badge}>fikrinadzif35@gmail.com</span>
      </div>
      <ItemLink />
    </div>
  );
}

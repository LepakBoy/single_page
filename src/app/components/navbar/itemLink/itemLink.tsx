'use client';
import React, { useState } from 'react';
import styles from './itemLink.module.css';
import Link from 'next/link';
import NavLink from '../navLink';
import MobileLink from '../mobileLink/mobileLink';
import { links } from '@/static/navbarLink';

export default function ItemLink() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        {links.map((link) => (
          <NavLink
            key={link.title}
            title={link.title}
            path={link.path}
          />
        ))}
      </div>

      <div className={styles.nav_button}>
        <button className={styles.button_hire}>Hire me!</button>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={styles.mobile_nav}
        >
          x
        </button>
      </div>
      {/* {open && <MobileLink open={open} />} */}
      <MobileLink open={open} />
    </>
  );
}

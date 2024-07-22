'use client';
import React, { useState } from 'react';
import styles from './itemLink.module.css';
import NavLink from '../navLink';
import MobileLink from '../mobileLink/mobileLink';
import { links } from '@/static/navbarLink';
import Link from 'next/link';

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
        <button className={styles.button_hire}>
          <Link
            className={styles.button_hire_link}
            href="https://linkedin.com/in/fikrinadzif"
            target="__blank"
          >
            Hire me!
          </Link>
        </button>
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

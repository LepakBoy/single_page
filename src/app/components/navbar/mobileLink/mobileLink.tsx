'use client';
import React from 'react';
import styles from './mobileLink.module.css';
import NavLink from '../navLink';
import { links } from '@/static/navbarLink';

interface IMobileLink {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileLink({ open, setOpen }: IMobileLink) {
  return (
    <div className={`${open ? styles.container : styles.collapsed}`}>
      <div
        onClick={() => setOpen(false)}
        className={`${open ? styles.wrapper : styles.hidden}`}
      >
        {open &&
          links.map((link) => (
            <NavLink
              path={link.path}
              title={link.title}
              key={link.title}
            />
          ))}
      </div>
    </div>
  );
}

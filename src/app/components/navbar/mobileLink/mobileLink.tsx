'use client';
import React from 'react';
import styles from './mobileLink.module.css';
import NavLink from '../navLink';

interface IMobileLink {
  open: boolean;
}

export default function MobileLink({ open }: IMobileLink) {
  const links = [
    { title: 'Works', path: '/works' },
    { title: 'Educations', path: '/education' },
    { title: 'Skills', path: '/skill' },
    { title: 'Courses', path: '/course' },
  ];

  return (
    <div className={`${open ? styles.container : styles.collapsed}`}>
      <div className={`${open ? styles.wrapper : styles.hidden}`}>
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

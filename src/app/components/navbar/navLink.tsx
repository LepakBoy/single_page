import Link from 'next/link';
import React from 'react';
import styles from './navLink.module.css';

interface INavlink {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: INavlink) {
  return (
    <>
      <Link
        className={styles.link}
        href={path}
      >
        {title}
      </Link>
    </>
  );
}

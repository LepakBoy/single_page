import React from 'react';
import styles from './titleSection.module.css';

interface ITitleSection {
  title: string;
  centered?: boolean;
}

export default function TitleSection({ title, centered }: ITitleSection) {
  return (
    <div
      className={`${styles.container} ${
        centered ? styles.center_title : styles.left_title
      }`}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

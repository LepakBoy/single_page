import React from 'react';
import styles from './titleSection.module.css';

interface ITitleSection {
  title: string;
}

export default function TitleSection({ title }: ITitleSection) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title || 'title section'}</h1>
    </div>
  );
}

import React from 'react';
import styles from './badge.module.css';

interface IBadge {
  jumboText: string;
  subText: string;
}

export default function Badge({ jumboText, subText }: IBadge) {
  return (
    <div className={styles.container}>
      <section className={styles.jumboText}>{jumboText}</section>
      <section className={styles.subText}>{subText}</section>
    </div>
  );
}

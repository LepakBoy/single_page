import React from 'react';
import styles from './resumeCard.module.css';

export default function ResumeCard() {
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>2020 - Present</h5>
      <h3 className={styles.title}>LEAD DEVELOPER</h3>
      <p className={styles.text}>Lorem ipsum dolor a</p>
    </div>
  );
}

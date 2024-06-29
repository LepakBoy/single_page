import React from 'react';
import styles from './resumeCard.module.css';

interface IResumeCard {
  date: string;
  title: string;
  text: string;
}

export default function ResumeCard({ date, title, text }: IResumeCard) {
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>2020 - Present</h5>
      <h3 className={styles.title}>LEAD DEVELOPER</h3>
      <p className={styles.text}>Lorem ipsum dolor a</p>
    </div>
  );
}

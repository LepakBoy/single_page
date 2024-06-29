import React from 'react';
import styles from './resumeSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import ResumeCard from '../molecule/resumeCard/resumeCard';

export default function ResumeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleSection title="My Experience" />
        <div className={styles.cards_group}>
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </div>
      </div>
      <div className={styles.wrapper}>
        <TitleSection title="My Educations" />
        <div className={styles.cards_group}>
          <ResumeCard />
        </div>
      </div>
      <div className={styles.wrapper}>
        <TitleSection title="My Courses" />
        <div className={styles.cards_group}>
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}

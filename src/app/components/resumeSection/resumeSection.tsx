import React from 'react';
import styles from './resumeSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import ResumeCard from '../molecule/resumeCard/resumeCard';
import { coursesList, educationsList, experienceList } from '@/static/resume';

export default function ResumeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleSection title="My Experience" />
        <div className={styles.cards_group}>
          {/* <ResumeCard />
          <ResumeCard />
          <ResumeCard /> */}
          {experienceList.map((list) => (
            <ResumeCard
              date={list.date}
              title={list.title}
              text={list.text}
              key={list.title}
            />
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <TitleSection title="My Educations" />
        <div className={styles.cards_group}>
          {educationsList.map((list) => (
            <ResumeCard
              date={list.date}
              title={list.title}
              text={list.text}
              key={list.title}
            />
          ))}{' '}
        </div>
      </div>
      <div className={styles.wrapper}>
        <TitleSection title="My Courses" />
        <div className={styles.cards_group}>
          {coursesList.map((list) => (
            <ResumeCard
              date={list.date}
              title={list.title}
              text={list.text}
              key={list.title}
            />
          ))}{' '}
        </div>
      </div>
    </section>
  );
}

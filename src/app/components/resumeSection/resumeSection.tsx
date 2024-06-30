import React from 'react';
import styles from './resumeSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import ResumeCard from '../molecule/resumeCard/resumeCard';
import { coursesList, educationsList, experienceList } from '@/static/resume';
import CardGroups from './cardGroups/cardGroups';

export default function ResumeSection() {
  return (
    <section className={styles.container}>
      <CardGroups
        title="My Experiences"
        data={experienceList}
      />
      <CardGroups
        title="My Educations"
        data={educationsList}
      />
      <CardGroups
        title="My Courses"
        data={coursesList}
      />
    </section>
  );
}

import React from 'react';
import styles from './worksSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';
import WorkdCard from './worksCard/workdCard';

export default function WorksSection() {
  return (
    <section
      id="works"
      className={styles.section}
    >
      <TitleSection
        centered
        title="My Recent Works"
      />
      <DescriptionSection text="I have completed a variety of projects, including interactive web applications, portfolio websites, and content management systems, demonstrating my proficiency in frontend development, backend integration, and creating engaging user experiences." />
      <div className={styles.container}>
        <WorkdCard />
        <WorkdCard />
        <WorkdCard />
        <WorkdCard />
        <WorkdCard />
      </div>
    </section>
  );
}

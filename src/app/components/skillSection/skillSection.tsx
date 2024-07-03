import React from 'react';
import styles from './skillSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';
import SkillsCard from './skillsCard/skillsCard';
import { skillList } from '@/static/skills';

export default function SkillSection() {
  return (
    <section
      id="skills"
      className={styles.container}
    >
      <TitleSection
        centered
        title="My Skills"
      />
      <DescriptionSection text="I am proficient in creating responsive and user-friendly websites, utilizing HTML, CSS, JavaScript, and various frontend frameworks to deliver visually appealing and functional web solutions." />
      <div className={styles.wrapper}>
        {skillList.map((list) => (
          <SkillsCard
            name={list.name}
            img={list.img}
            percentage={list.percentage}
            key={list.name}
          />
        ))}
      </div>
    </section>
  );
}

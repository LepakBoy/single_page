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
      <DescriptionSection text="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />
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

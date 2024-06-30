import React from 'react';
import styles from './skillSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';

export default function SkillSection() {
  return (
    <div className={styles.container}>
      <TitleSection
        centered
        title="My Skills"
      />
      <DescriptionSection text="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />
    </div>
  );
}

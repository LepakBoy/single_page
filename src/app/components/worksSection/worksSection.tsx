import React from 'react';
import styles from './worksSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';

export default function WorksSection() {
  return (
    <section className={styles.section}>
      <TitleSection
        centered
        title="My Recent Works"
      />
      <DescriptionSection text="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />
    </section>
  );
}

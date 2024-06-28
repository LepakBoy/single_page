import React from 'react';
import styles from './worksSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';

export default function WorksSection() {
  return (
    <section className={styles.section}>
      <TitleSection title="My Awesome Works" />
    </section>
  );
}

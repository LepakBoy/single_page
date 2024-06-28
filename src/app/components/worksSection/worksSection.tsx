import React from 'react';
import styles from './worksSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';

export default function WorksSection() {
  return (
    <div className={styles.container}>
      <TitleSection title="My Awesome Works" />
    </div>
  );
}

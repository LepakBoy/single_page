import React from 'react';
import styles from './badgeSection.module.css';
import Badge from '../molecule/badge/badge';

export default function BadgeSection() {
  return (
    <section className={styles.container}>
      <Badge
        jumboText="12"
        subText="Years of Experience"
      />
      <Badge
        jumboText="50+"
        subText="Projects compeleted"
      />
      <Badge
        jumboText="1.5k"
        subText="Happy Clients"
      />
      <Badge
        jumboText="12"
        subText="Years of Experience"
      />
    </section>
  );
}

import React from 'react';
import styles from './descriptionSection.module.css';

interface IDescriptionSection {
  text: string;
}

export default function DescriptionSection({ text }: IDescriptionSection) {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

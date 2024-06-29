import React from 'react';
import styles from './buttonServices.module.css';

interface IButtonServices {
  name: string;
  description: string;
}

export default function ButtonServices({ name, description }: IButtonServices) {
  return (
    <div className={styles.container}>
      <div className={styles.title_service}>
        <span className={styles.number}>01</span>
        <h3 className={styles.service_name}>{name}</h3>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

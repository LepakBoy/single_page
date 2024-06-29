import React from 'react';
import styles from './buttonServices.module.css';

export default function ButtonServices() {
  return (
    <div className={styles.container}>
      <div className={styles.title_service}>
        <span className={styles.number}>01</span>
        <h3 className={styles.service_name}>Frontend Web Developer</h3>
      </div>
      <div className={styles.description}>
        I break down complex user experinece problems to create integritiy
        focussed solutions that connect billions of people
      </div>
    </div>
  );
}

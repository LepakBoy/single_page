import React from 'react';
import styles from './worksCard.module.css';
import Image from 'next/image';

export default function WorkdCard() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.project_img}
          src="/project1.png"
          height={100}
          width={100}
          alt="projects"
        />
        <div className={styles.banner_container}>
          <div className={styles.banner}>
            <h3 className={styles.name}>Nama Project</h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              at? Ab, deleniti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

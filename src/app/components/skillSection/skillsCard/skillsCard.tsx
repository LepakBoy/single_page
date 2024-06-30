import React from 'react';
import styles from './skillsCard.module.css';
import Image from 'next/image';

interface ISkillsCard {
  name: string;
  img: string;
  percentage: string;
}

export default function SkillsCard({ name, img, percentage }: ISkillsCard) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.skill_img}
          src={img}
          height={100}
          width={100}
          alt="react"
        />
        <h3 className={styles.percentage}>{`${percentage}%`}</h3>
      </div>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}

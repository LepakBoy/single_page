import React from 'react';
import styles from './worksCard.module.css';
import Image from 'next/image';

interface IWorkCard {
  name: string;
  description: string;
  img: string;
}

export default function WorkdCard(props: IWorkCard) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.project_img}
          src={props.img}
          height={200}
          width={200}
          alt="projects"
        />
        <div className={styles.banner_container}>
          <div className={styles.banner}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './heroSection.module.css';
import Image from 'next/image';

export default function HeroSection() {
  const listButton = ['twitter', 'web', 'linkedin', 'github'];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title_name}>I am Fikri Ahmad</h2>
        <h1 className={styles.title}>
          Fullstack Web Developer <span> + </span> CAD Drafter
        </h1>
        <Image
          className={styles.photo_mobile}
          src="/photo.jpg"
          height={300}
          width={300}
          alt=""
        />
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          doloribus delectus officiis cumque consequatur, libero eligendi
          perferendis laborum quam voluptas debitis
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button_cv} ${styles.button_effect}`}>
            Download CV
          </button>
          {listButton.map((button) => (
            <button
              key={button}
              className={`${styles.button_media} ${styles.button_effect}`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.hero_image}>
        <Image
          className={styles.photo}
          src="/photo.jpg"
          height={300}
          width={300}
          alt=""
        />
      </div>
    </div>
  );
}

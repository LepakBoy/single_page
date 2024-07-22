import React from 'react';
import styles from './heroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import BadgeSection from '../badgeSection/badgeSection';
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  WebIcon,
} from '../../../../public/svgs';

export default function HeroSection() {
  const listButton = [
    {
      name: 'twitter',
      svg: <TwitterIcon className={styles.svg} />,
      link: '/',
    },
    {
      name: 'web',
      svg: <WebIcon className={styles.svg} />,
      link: '/',
    },
    {
      name: 'linkedin',
      svg: <LinkedInIcon className={styles.svg} />,
      link: 'https://www.linkedin.com/in/fikrinadzif/',
    },
    {
      name: 'github',
      svg: <GithubIcon className={styles.svg} />,
      link: 'https://www.github.com/LepakBoy',
    },
  ];

  return (
    <section
      id="hero"
      className={styles.section}
    >
      {/* <BgHero /> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title_name}>I am Fikri Ahmad</h2>
          <h1 className={styles.title}>
            Fullstack Web Developer <span> + </span> CAD Drafter
          </h1>
          <Image
            className={styles.photo_mobile}
            src="/image.png"
            height={300}
            width={300}
            alt=""
          />
          <p className={styles.description}>
            I am an experienced web developer. I specialize in designing,
            creating, and maintaining websites using HTML, CSS, JavaScript,
            React.js as well as backend languages like Node.js. With a focus on
            responsive design, SEO, and web security, I ensure the websites I
            build are safe, fast, and easily accessible on various devices.
            Creativity, problem-solving, and continuous learning of new
            technologies are my main strengths.
          </p>
          <div className={styles.buttons}>
            <Link
              href={'/'}
              className={`${styles.button_cv} ${styles.button_effect}`}
            >
              Download CV
              <DownloadIcon className={styles.svg} />
            </Link>
            <ul className={styles.social_box}>
              {listButton.map((button) => (
                <li
                  key={button.name}
                  className={`${styles.button_media} ${styles.button_effect}`}
                >
                  <Link
                    className={`${styles.button_media} ${styles.button_effect}`}
                    href={button.link}
                    target="__blank"
                  >
                    {button.svg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.hero_image}>
          <Image
            className={styles.photo}
            src="/image.png"
            height={300}
            width={300}
            alt=""
          />
        </div>
      </div>
      <BadgeSection />
    </section>
  );
}

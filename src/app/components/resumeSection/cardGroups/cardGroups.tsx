import React from 'react';
import styles from './cardGroups.module.css';
import TitleSection from '../../molecule/titleSection/titleSection';
import { experienceList } from '@/static/resume';
import ResumeCard from '../../molecule/resumeCard/resumeCard';

export interface ICardGroups {
  date: string;
  title: string;
  text: string;
}

export default function CardGroups(data: ICardGroups[]) {
  return (
    <div className={styles.wrapper}>
      <TitleSection title="My Experience" />
      <div className={styles.cards_group}>
        {data.map((list) => (
          <ResumeCard
            date={list.date}
            title={list.title}
            text={list.text}
            key={list.title}
          />
        ))}
      </div>
    </div>
  );
}

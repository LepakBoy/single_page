import React from 'react';
import styles from './cardGroups.module.css';
import TitleSection from '../../molecule/titleSection/titleSection';
import { experienceList } from '@/static/resume';
import ResumeCard from '../../molecule/resumeCard/resumeCard';

interface ICardGroupsComponent {
  data: ICardGroups[];
  title: string;
}
export interface ICardGroups {
  date: string;
  title: string;
  text: string;
}

export default function CardGroups({ data, title }: ICardGroupsComponent) {
  return (
    <div className={styles.cards_group}>
      <div className={styles.wrapper}>
        <TitleSection title={title} />
        <div className={styles.cards}>
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
    </div>
  );
}

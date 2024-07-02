import React from 'react';
import styles from './contactCard.module.css';

interface IContactCard {
  logo: string;
  title: string;
  value: string;
}

export default function ContactCard(props: IContactCard) {
  const { logo, title, value } = props;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div className={styles.contact_title}>
        {title}
        <h2 className={styles.text}>{value}</h2>
      </div>
    </div>
  );
}

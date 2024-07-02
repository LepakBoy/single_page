import React from 'react';
import styles from './contactSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';

export default function ContactSection() {
  return (
    <section className={styles.container}>
      <div className={styles.input_area}>
        <TitleSection title={`Let's work together!`} />
        <p className={styles.text_contact}>
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
        <div className={styles.inputs_wrapper}>
          <div className={styles.row}>
            <input
              className={styles.input_field}
              type="text"
              placeholder="First name"
            />
            <input
              className={styles.input_field}
              type="text"
              placeholder="last name"
            />
          </div>
          <div className={styles.row}>
            <input
              className={styles.input_field}
              type="text"
              placeholder="Email address"
            />
            <input
              className={styles.input_field}
              type="text"
              placeholder="Phone number"
            />
          </div>
          <textarea
            rows={10}
            className={styles.text_area}
          />
          <button className={styles.button_send}>Send message</button>
        </div>
      </div>
      <div className={styles.contact_area}>ocntact area</div>
    </section>
  );
}

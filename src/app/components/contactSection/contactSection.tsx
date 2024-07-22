import React from 'react';
import styles from './contactSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import ContactCard from './contactCard/contactCard';
import { contacts } from '@/static/contact';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.container}
    >
      <div className={styles.input_area}>
        <TitleSection title={`Let's work together!`} />
        <p className={styles.text_contact}>
          {`Let's connect and collaborate! Reach out to discuss how we can work
          together to bring your web projects to life.`}
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
      <div className={styles.contact_area}>
        <div className={styles.contact_wrapper}>
          {contacts.map((contact) => (
            <ContactCard
              key={contact.value}
              logo={contact.logo}
              title={contact.title}
              value={contact.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

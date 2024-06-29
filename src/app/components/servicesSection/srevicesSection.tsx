import React from 'react';
import styles from './servicesSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';
import ButtonServices from '../molecule/buttonServices/buttonServices';

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <TitleSection title="My Quality Services" />
      <DescriptionSection text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ipsa minus, eius voluptatibus nisi expedita voluptatum sit maiores nostrum doloribus veniam " />
      <div className={styles.wrapper}>
        <ButtonServices />
        <ButtonServices />
        <ButtonServices />
        <ButtonServices />
      </div>
    </section>
  );
}

import React from 'react';
import styles from './servicesSection.module.css';
import TitleSection from '../molecule/titleSection/titleSection';
import DescriptionSection from '../molecule/descriptionSection/descriptionSection';
import ButtonServices from '../molecule/buttonServices/buttonServices';
import { servicesList } from '@/static/services';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={styles.container}
    >
      <TitleSection
        centered
        title="My Quality Services"
      />
      <DescriptionSection text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ipsa minus, eius voluptatibus nisi expedita voluptatum sit maiores nostrum doloribus veniam " />
      <div className={styles.wrapper}>
        {servicesList.map((list, i) => (
          <ButtonServices
            key={list.name}
            name={list.name}
            number={`0${i + 1}`}
            description={list.description}
          />
        ))}
      </div>
    </section>
  );
}

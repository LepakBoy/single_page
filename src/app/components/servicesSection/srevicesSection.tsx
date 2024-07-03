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
      <DescriptionSection text="As a full stack web developer, I provide end-to-end website development services, creating user-friendly interfaces and implementing powerful backend functionalities. I specialize in delivering tailored web solutions that meet client objectives and enhance online presence effectively." />
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

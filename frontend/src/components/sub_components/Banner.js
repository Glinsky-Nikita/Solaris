'use client';

import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Солярис</h1>
        <h2 className={styles.subtitle}>Постановка: Михаил Юрьевич Сопов</h2>
      </div>
    </section>
  );
};

export default Banner;

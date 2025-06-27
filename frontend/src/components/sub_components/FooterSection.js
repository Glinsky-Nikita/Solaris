'use client';

import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by: <a href="https://vk.com/arinanekrutaya" className={styles.link}>Арина Волкова</a>
      </p>
    </footer>
  );
};

export default FooterSection;

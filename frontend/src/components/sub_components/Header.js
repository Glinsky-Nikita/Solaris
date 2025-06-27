'use client';

import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

  return (
    <header className={styles.header}>

      <a href="https://www.nmdt.ru" target="_blank" rel="noopener noreferrer">
        <img src="/logo.png" alt="Логотип" className={styles.logo} />
      </a>
      
      <Link to="/" className={styles.link}>
        <h1 className={styles.text}>Новошахтинский драматический театр представляет</h1>
      </Link>
      
      <nav className={styles.nav}>
        <Link to="/reviews" className={styles.navLink}>
         Отзывы
        </Link>
        <Link to="/sub" className={styles.navLink}>
          Подписаться на рассылку
        </Link>
      </nav>
    </header>
  );
};

export default Header;
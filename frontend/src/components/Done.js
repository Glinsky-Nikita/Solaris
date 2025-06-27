'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Done.module.css';

export default function Authorized() {

  return (
    <div className={styles.authorizedContainer}>
      <div className={styles.content}>
        <h2>Cпасибо, что подписались на нашу рассылку!</h2>
        <h3>Будем стараться радовать вас новыми событиями!</h3>
        <Link to = "/" className={styles.logoutButton}>
          Выйти
        </Link>
      </div>
    </div>
  );
}
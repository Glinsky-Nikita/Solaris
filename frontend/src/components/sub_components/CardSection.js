'use client';

import React from 'react';
import styles from './CardSection.module.css';

const CardSection = () => {
  const cards = [
    { image: '/cards/kris.jpg' },
    { image: '/cards/hari-1.jpg' },
    { image: '/cards/hari-2.jpg' },
  ];

  return (
    <section className={styles.cardSection}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Эскизы костюмов</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <div className={styles.cardContainer} key={index}>
            <div className={styles.card}>
              <div className={styles.front}>
                <img src={card.image} alt={`Card ${index + 1}`} className={styles.coverImage} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.separator}></div>
    </section>
  );
};

export default CardSection;
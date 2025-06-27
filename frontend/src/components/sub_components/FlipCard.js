'use client';

import { useState } from 'react';
import styles from './FlipCard.module.css';

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardContainer} onClick={handleFlip}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Передняя сторона карточки */}
        <div className={styles.front}>
          <img
            src="/cards/cardd.jpg" 
            alt="Card Cover"
            className={styles.coverImage}
          />
        </div>
        {/* Задняя сторона карточки */}
        <div className={styles.back}>
          <img
            src="/cards/hands.jpeg" 
            alt="The Hands Resist Him"
            className={styles.backImage}
          />
          <div className={styles.backText}>
            <p className={styles.title}>«The Hands Resist Him» Билл Стоунхэм</p>
            <p className={styles.description}>
              Автор уверяет, что на картине изображен он сам в возрасте пяти лет,
              дверь – представление разделительной линии между реальным миром и миром
              снов, а кукла – проводник, который сможет провести мальчика через этот мир.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

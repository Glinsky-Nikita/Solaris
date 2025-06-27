'use client';

import styles from './NewsFeed.module.css';

export const NewsFeed = () => {
  return (
    <section className={styles.newsFeed}>
      <div className={styles.separator}></div>

      <h2 className={styles.heading}>Новостная лента</h2>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          controls
          muted={false} 
          preload="metadata"
        >
          <source src="/news.mp4" type="video/mp4" />
          Ваш браузер не поддерживает элемент <code>video</code>.
        </video>
      </div>

      <div className={styles.separator}></div>
    </section>
  );
};

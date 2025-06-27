import styles from './VideoBlock.module.css';

const VideoBlock = () => {
  return (
    <div className={styles.videoBlock}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        src="/nachal.mp4"
        poster="/video/poster.jpg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBlock;

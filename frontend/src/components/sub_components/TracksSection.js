'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './TracksSection.module.css';
import tracks from './public/tracks.json';

export const TracksSection = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [likedTracks, setLikedTracks] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const handleLike = (id, like) => {
    setLikedTracks((prev) => ({ ...prev, [id]: like }));
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentTrackIndex]);

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.trackCard}>
        <img src={currentTrack.image} alt={currentTrack.title} className={styles.trackImage} />
        <h2 className={styles.trackTitle}>{currentTrack.title}</h2>
        <p className={styles.trackAuthor}>{currentTrack.author}</p>

        <input
          type="range"
          value={currentTime}
          max={duration || 0}
          step="1"
          onChange={handleSeek}
          className={styles.progressBar}
        />
        <div className={styles.timeInfo}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className={styles.controls}>
          <button
            onClick={() => handleLike(currentTrack.id, 'dislike')}
            className={styles.controlButton}
          >
            <img
              src="/dislike.png"
              alt="Dislike"
              className={styles.likeDislikeImage}
            />
          </button>
          <button onClick={handlePrevious} className={styles.controlButton}>
            <img src="/previous.png" alt="Previous" className={styles.controlImage} />
          </button>
          <button onClick={handlePlayPause} className={styles.controlButton}>
            <img
              src={isPlaying ? '/pause.png' : '/play.png'}
              alt={isPlaying ? 'Pause' : 'Play'}
              className={styles.controlImage2}
            />
          </button>
          <button onClick={handleNext} className={styles.controlButton}>
            <img src="/next.png" alt="Next" className={styles.controlImage} />
          </button>
          <button
            onClick={() => handleLike(currentTrack.id, 'like')}
            className={styles.controlButton}
          >
            <img
              src="/love.png"
              alt="Like"
              className={styles.likeDislikeImage}
            />
          </button>
        </div>
        <audio
          ref={audioRef}
          src={currentTrack.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={handleNext}
        />
      </div>
    </div>
  );
};

const formatTime = (time) => {
  if (isNaN(time)) return '00:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
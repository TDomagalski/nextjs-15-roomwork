// components/Slider.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import styles from './slider.module.scss';

export default function Slider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return <p>Brak zdjęć</p>;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.slider}>
      {/* Strzałki */}
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>

      {/* Obraz */}
      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          layout='fill' /* Obraz wypełnia cały kontener */
          objectFit='cover' /* Zajmuje cały kontener, zachowując proporcje */
          objectPosition='center' /* Wyśrodkowanie */
        />
      </div>

      {/* Kropki */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

// components/Slider.jsx
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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

      {/* Animowane zdjęcie */}
      <div className={styles.imageContainer}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.motionImage}
          >
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              layout='fill' /* Obraz wypełnia cały kontener */
              objectFit='cover' /* Zajmuje cały kontener, zachowując proporcje */
              objectPosition='center' /* Wyśrodkowanie */
            />
          </motion.div>
        </AnimatePresence>
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

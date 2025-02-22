'use client';
import rooms from '../../data/rooms';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './slug.module.scss';

// Import ikon
import RoomPersonIcon from '@public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '@public/kwatery/room_equipment/RoomBedIcon';
import RoomBathroomIcon from '@public/kwatery/room_equipment/RoomBathroomIcon';

// Mapa ikon (aby używać dynamicznie)
const iconMap = {
  RoomPersonIcon: <RoomPersonIcon />,
  RoomBedIcon: <RoomBedIcon />,
  RoomBathroomIcon: <RoomBathroomIcon />,
};

export default function RoomDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Znajdź pokój na podstawie slug
  const room = rooms.find((r) => r.slug === slug);

  // Stan dla full screen
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funkcje zmiany zdjęć
  const openFullScreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === room.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.images.length - 1 : prevIndex - 1,
    );
  };

  if (!room) {
    return <p>Pokój nie znaleziony</p>;
  }

  return (
    <>
      <Head>
        <title>{room.name} | Kwatery Pracownicze Słomniki</title>
        <meta name='description' content={room.description} />
        <meta property='og:title' content={room.name} />
        <meta property='og:description' content={room.description} />
        <meta property='og:image' content={room.images[0]?.url} />
      </Head>

      <div className='container'>
        <div className='top_page'>
          <div className='page_title'>
            <div className='text'>
              <h1>RoomWork - Kwatery pracownicze</h1>
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image
              src={room.roomImg}
              alt={room.name}
              width={1848}
              height={1232}
            />
          </div>
        </div>

        <div className='container_bg'>
          <div className={styles.room}>
            <h3 className={styles.room_name}>{room.name}</h3>
            <p>{room.description}</p>

            <div className={styles.room_details}>
              {room.details.map((detail, index) => (
                <div key={index} className={styles.detail}>
                  <div>{iconMap[detail.icon]}</div>
                  <div>
                    {detail.value} {detail.label}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.room_imgs}>
              {room.images.map((img, index) => (
                <div
                  key={img.id}
                  className={styles.room_img}
                  onClick={() => openFullScreen(index)}
                >
                  <Image src={img.url} alt={img.alt} width={400} height={300} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className={styles.fullscreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.fullscreen_content}>
              <button className={styles.close_btn} onClick={closeFullScreen}>
                ✖
              </button>
              <button className={styles.prev_btn} onClick={prevImage}>
                &#8592;
              </button>
              <div className={styles.fullscreen_img}>
                <Image
                  src={room.images[currentImageIndex].url}
                  alt={room.images[currentImageIndex].alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <button className={styles.next_btn} onClick={nextImage}>
                &#8594;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import rooms from '../data/rooms';
import RoomCard from '@components/rooms/roomCard/RoomCard';

import styles from './rooms.module.scss';
import Image from 'next/image';

export default function Rooms() {
  const [filter, setFilter] = useState('all');

  // Dokładne filtrowanie po liczbie osób
  const filteredRooms = rooms.filter((room) =>
    filter === 'all'
      ? true
      : room.details.some(
          (d) => d.icon === 'RoomPersonIcon' && d.value === filter,
        ),
  );

  return (
    <div className='container'>
      <div className='top_page'>
        <div className='page_title'>
          <div className='text'>
            <h1>Kwatery pracownicze</h1>
            <p>do wynajęcia w Słomnikach</p>
          </div>
          <div className='box'></div>
        </div>
        <div className='page_img'>
          <Image
            src='/global/korytarz-parter_img1.webp'
            alt='img'
            width={2016}
            height={1134}
            loading='lazy' // Można jawnie ustawić
            priority={false} // Zapewnia lazy loading (domyślnie dla obrazów poniżej viewportu)
          />
        </div>
      </div>

      <div className='container_bg'>
        <div className='container_page'>
          <h4>Znajdz coś dla siebie</h4>
          <p>
            Nasze kwatery znajdują się zarówno na parterze, jak i na piętrze. Na
            każdym poziomie dostępna jest w pełni wyposażona kuchnia, gdzie
            Goście mogą samodzielnie przygotować posiłki. Oferujemy również duży
            parking na terenie obiektu, a dla mieszkańców zapewniamy szybkie i
            darmowe WiFi.
          </p>
        </div>
      </div>

      <div className='container_bg'>
        <div className='container_page'>
          <div className={styles.rooms_title}>
            <h2>Szukaj kwatery</h2>
          </div>
          <div className={styles.rooms}>
            <div className={styles.filter_buttons}>
              <button
                className={filter === 'all' ? styles.active : ''}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={filter === '2' ? styles.active : ''}
                onClick={() => setFilter('2')}
              >
                2 osoby
              </button>
              <button
                className={filter === '3' ? styles.active : ''}
                onClick={() => setFilter('3')}
              >
                3 osoby
              </button>
              <button
                className={filter === '6' ? styles.active : ''}
                onClick={() => setFilter('6')}
              >
                6 osoby
              </button>
            </div>

            {/* Lista kwater */}
            <AnimatePresence>
              {filteredRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  name={room.name}
                  url={room.url}
                  slug={room.slug}
                  images={room.images}
                  description={room.description}
                  details={room.details}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

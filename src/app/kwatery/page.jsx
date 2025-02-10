'use client';

import { useState } from 'react';
import { rooms } from '../data/rooms';
import RoomCard from '@components/rooms/roomCard/RoomCard';
import RoomFilter from '@components/rooms/roomFilter/roomFilter';

import styles from './rooms.module.scss';
import Image from 'next/image';

export default function Rooms() {
  const [filteredPersons, setFilteredPersons] = useState(null);

  // Filtrowanie dokładnie według `personRange`
  const filteredRooms = filteredPersons
    ? rooms.filter((room) => room.personRange === filteredPersons) // Dokładne dopasowanie
    : rooms;

  return (
    <div className='container'>
      <div className='top_page'>
        <div className='page_title'>
          <div className='text'>
            <h1>Kwatery pracownicze</h1>
            {/* <p>krótki opis działalności</p> */}
          </div>
          <div className='box'></div>
        </div>
        <div className='page_img'>
          <Image
            src='/global/top_page.webp'
            alt='img'
            width={1848}
            height={1232}
          />
        </div>
      </div>

      <div className={styles.container_flex}>
        <div className={styles.rooms_title}>
          <h2>Znajdź coś dla siebie</h2>
        </div>
        <div className={styles.rooms}>
          <RoomFilter onFilterChange={setFilteredPersons} />

          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                image={room.image}
                description={room.description}
                details={room.details}
              />
            ))
          ) : (
            <p>Brak pokoi spełniających kryteria.</p>
          )}

          {/* {rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              image={room.image}
              description={room.description}
              details={room.details}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

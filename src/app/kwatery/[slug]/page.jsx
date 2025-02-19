'use client';
import rooms from '../../data/rooms';
import { useParams } from 'next/navigation';

import Image from 'next/image';
import Head from 'next/head';

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
  // Pobieranie parametrów dynamicznych z useParams
  const params = useParams();
  const slug = params?.slug;

  // Znajdź pokój na podstawie slug
  const room = rooms.find((r) => r.slug === slug);

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

        <div className='container_bg'>
          <div className={styles.room_detail}>
            <h2>{room.name}</h2>
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
              {room.images.map((img) => (
                <div key={img.id} className={styles.room_img}>
                  <Image src={img.url} alt={img.alt} width={400} height={300} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

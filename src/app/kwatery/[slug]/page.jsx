import rooms from '../../data/rooms';
import Image from 'next/image';
import Head from 'next/head';
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

// 🔹 Generowanie statycznych ścieżek dla Next.js
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default function RoomDetail({ params }) {
  const { slug } = params;

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
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image
              src={room.roomImg}
              alt={room.name}
              width={2016}
              height={1134}
              loading='lazy'
              priority={false}
            />
          </div>
        </div>

        <div className='container_bg'>
          <div className='container_page'>
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
                  <div key={img.id} className={styles.room_img}>
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={400}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

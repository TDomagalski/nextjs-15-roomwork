'use client';

import rooms from '../../data/rooms';
import { useParams } from 'next/navigation';
import Head from 'next/head';

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

      <div className='room-detail'>
        <h1>{room.name}</h1>
        <p>{room.description}</p>
        <div className='room-images'>
          {room.images.map((img) => (
            <img key={img.id} src={img.url} alt={img.alt} />
          ))}
        </div>
        <div className='room-details'>
          {room.details.map((detail, index) => (
            <div key={index} className='detail'>
              <span>{detail.icon}</span>
              <span>
                {detail.value} {detail.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

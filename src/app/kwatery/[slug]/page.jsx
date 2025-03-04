import dynamic from 'next/dynamic';
import rooms from '../../data/rooms';
import Image from 'next/image';
import Head from 'next/head';
import styles from './slug.module.scss';

// Import ikon
import RoomPersonIcon from '@public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '@public/kwatery/room_equipment/RoomBedIcon';
import RoomBathroomIcon from '@public/kwatery/room_equipment/RoomBathroomIcon';

const iconMap = {
  RoomPersonIcon: <RoomPersonIcon />,
  RoomBedIcon: <RoomBedIcon />,
  RoomBathroomIcon: <RoomBathroomIcon />,
};

// const RoomDetailClient = dynamic(() => import('../../data/rooms'), {
//   ssr: false,
// });

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetail({ params }) {
  const { slug } = await params;
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
              <h1>Pokoje</h1>
              <p>Do wynajęcia</p>
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image
              src={room.roomImg}
              alt='Pokoje pracownicze do wynajęcia w Słomnikach'
              width={1512}
              height={851}
              loading='lazy' // Wymusza leniwe ładowanie
              priority={false} // Zapewnia, że Next.js nie wymusi eager loading
              unoptimized // Zapobiega problemom z eksportem
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
                    <a href={`#fullscreen-${index}`}>
                      <Image
                        src={img.url}
                        alt={img.alt}
                        width={400}
                        height={300}
                      />
                    </a>
                    <div
                      id={`fullscreen-${index}`}
                      className={styles.fullscreen}
                    >
                      <a href='#' className={styles.close_btn}>
                        &times;
                      </a>
                      <a
                        href={`#fullscreen-${(index - 1 + room.images.length) % room.images.length}`}
                        className={styles.prev_btn}
                      >
                        &#8249;
                      </a>
                      <div className={styles.fullscreen_content}>
                        <Image
                          src={img.url}
                          alt={img.alt}
                          width={1200}
                          height={800}
                          className={styles.fullscreen_img}
                        />
                      </div>
                      <a
                        href={`#fullscreen-${(index + 1) % room.images.length}`}
                        className={styles.next_btn}
                      >
                        &#8250;
                      </a>
                    </div>
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

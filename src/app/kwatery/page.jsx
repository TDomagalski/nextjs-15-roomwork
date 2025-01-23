import Image from 'next/image';

import RoomPersonIcon from '../../../public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '../../../public/kwatery/room_equipment/RoomBedIcon';
import RoomDoubleBedIcon from '../../../public/kwatery/room_equipment/RoomDoubleBedIcon';
import RoomBathroomIcon from '../../../public/kwatery/room_equipment/RoomBathroomIcon';

import '../globals.scss';
import styles from './rooms.module.scss';

export default function Rooms() {
  return (
    <>
      <section className='container_title'>
        <div className='title_image'>
          <Image alt='Image' src='/global/img.webp' width={1072} height={712} />
        </div>
        <div className='title_description'>
          <h2>Kwatery</h2>
          <p>Oto nasze kwatery pracownicze wraz ze szczegółami</p>
        </div>
      </section>

      <section className={`${styles.row} ${styles.row_room}`}>
        <div className={`${styles.column} ${styles.column_cover}`}>
          <Image
            alt='Image'
            src='/kwatery/img-mini.webp'
            width={268}
            height={178}
          />
        </div>
        <div className={`${styles.column} ${styles.column_info}`}>
          <div className={styles.info_icons}>
            <div>
              <RoomPersonIcon />
              <span>3 - 4</span>
            </div>
            <div>
              <RoomBedIcon />
              <span>2</span>
            </div>
            <div>
              <RoomDoubleBedIcon />
              <span>1</span>
            </div>
            <div>
              <RoomBathroomIcon />
              <span>1</span>
            </div>
          </div>
          <div className={styles.info_description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              consequatur non accusantium cum natus ea molestias rerum
              excepturi.
            </p>
          </div>
        </div>
        <div className={styles.column_more_info}>
          <button className='infoButton'>
            <span>Szczegóły</span>
          </button>
        </div>
      </section>

      <section className={`${styles.row} ${styles.row_room}`}>
        <div className={`${styles.column} ${styles.column_cover}`}>
          <Image
            alt='Image'
            src='/kwatery/img-mini.webp'
            width={268}
            height={178}
          />
        </div>
        <div className={`${styles.column} ${styles.column_info}`}>
          <div className={styles.info_icons}>
            <div>
              <RoomPersonIcon />
              <span>3 - 4</span>
            </div>
            <div>
              <RoomBedIcon />
              <span>2</span>
            </div>
            <div>
              <RoomDoubleBedIcon />
              <span>1</span>
            </div>
            <div>
              <RoomBathroomIcon />
              <span>1</span>
            </div>
          </div>
          <div className={styles.info_description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              consequatur non accusantium cum natus ea molestias rerum
              excepturi.
            </p>
          </div>
        </div>
        <div className={styles.column_more_info}>
          <button className='infoButton'>
            <span>Szczegóły</span>
          </button>
        </div>
      </section>

      <section className={`${styles.row} ${styles.row_room}`}>
        <div className={`${styles.column} ${styles.column_cover}`}>
          <Image
            alt='Image'
            src='/kwatery/img-mini.webp'
            width={268}
            height={178}
          />
        </div>
        <div className={`${styles.column} ${styles.column_info}`}>
          <div className={styles.info_icons}>
            <div>
              <RoomPersonIcon />
              <span>3 - 4</span>
            </div>
            <div>
              <RoomBedIcon />
              <span>2</span>
            </div>
            <div>
              <RoomDoubleBedIcon />
              <span>1</span>
            </div>
            <div>
              <RoomBathroomIcon />
              <span>1</span>
            </div>
          </div>
          <div className={styles.info_description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              consequatur non accusantium cum natus ea molestias rerum
              excepturi.
            </p>
          </div>
        </div>
        <div className={styles.column_more_info}>
          <button className='infoButton'>
            <span>Szczegóły</span>
          </button>
        </div>
      </section>
    </>
  );
}

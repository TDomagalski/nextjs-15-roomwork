import Image from 'next/image';

import RoomPersonIcon from '../../../public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '../../../public/kwatery/room_equipment/RoomBedIcon';
import RoomDoubleBedIcon from '../../../public/kwatery/room_equipment/RoomDoubleBedIcon';
import RoomBathroomIcon from '../../../public/kwatery/room_equipment/RoomBathroomIcon';

import '../globals.scss';
import styles from './rooms.module.scss';
import Link from 'next/link';

export default function Rooms() {
  return (
    <>
      <section className={styles.row}>
        <div className={styles.column}>
          <Image alt='Image' src='/global/img.webp' width={1072} height={712} />
        </div>
        <div className={styles.column}>
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
          <div className={styles.info}>
            <RoomPersonIcon />
            <span>3 - 4</span>
          </div>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>2</span>
          </div>
          <div className={styles.info}>
            <RoomDoubleBedIcon />
            <span>1</span>
          </div>
          <div className={styles.info}>
            <RoomBathroomIcon />
            <span>1</span>
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
          <div className={styles.info}>
            <RoomPersonIcon />
            <span>3 - 4</span>
          </div>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>2</span>
          </div>
          <div className={styles.info}>
            <RoomDoubleBedIcon />
            <span>1</span>
          </div>
          <div className={styles.info}>
            <RoomBathroomIcon />
            <span>1</span>
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
          <div className={styles.info}>
            <RoomPersonIcon />
            <span>3 - 4</span>
          </div>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>2</span>
          </div>
          <div className={styles.info}>
            <RoomDoubleBedIcon />
            <span>1</span>
          </div>
          <div className={styles.info}>
            <RoomBathroomIcon />
            <span>1</span>
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

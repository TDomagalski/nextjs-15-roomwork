import Image from 'next/image';

import RoomBedIcon from '../../../public/kwatery/room_equipment/RoomDoubleBedIcon';

import '../globals.scss';
import styles from './rooms.module.scss';
import Link from 'next/link';

export default function Rooms() {
  return (
    <>
      <section className={styles.row}>
        <div className={`${styles.column} ${styles.column_cover}`}>
          <Image alt='Image' src='/img-mini.webp' width={268} height={178} />
        </div>
        <div className={`${styles.column} ${styles.column_info}`}>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>Łóżka</span>
          </div>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>Łóżka</span>
          </div>
          <div className={styles.info}>
            <RoomBedIcon />
            <span>Łazienka</span>
          </div>
        </div>
        <Link
          className={`${styles.column} ${styles.column_btns}`}
          href='/kwatery/parter-1'
        >
          <button className={styles.btn_info}>
            <span>Zdjęcia</span>
          </button>
          <button className={styles.btn_info}>
            <span>Szczegóły</span>
          </button>
        </Link>
      </section>
    </>
  );
}

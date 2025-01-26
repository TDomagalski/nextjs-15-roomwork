import Image from 'next/image';

import '../../styles/globals.scss';
import styles from './kontakt.module.scss';

export default function Kontakt() {
  return (
    <>
      <div className='container'>
        <h1>Kontakt</h1>
      </div>
      <div className={styles.google_map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.169026141523!2d20.064644776840495!3d50.232747103014624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165313b56b455b%3A0xbee57c823b9b8a2d!2sRoomWork%20-%20Kwatery%20pracownicze%20do%20wynaj%C4%99cia!5e0!3m2!1spl!2spl!4v1737041003873!5m2!1spl!2spl'
          width='400'
          height='300'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer'
        ></iframe>
      </div>
    </>
  );
}

import Image from 'next/image';

import '../globals.scss';
import styles from './kontakt.module.scss';

export default function Kontakt() {
  return (
    <>
      <section className={styles.row}>
        <div className={styles.column}>
          <Image alt='Image' src='/img.webp' width={1072} height={712} />
        </div>
        <div className={styles.column}>
          <div className={styles.contact_title}>
            <h2>Kontakt</h2>
            <span>Skontaktuj się z nami</span>
          </div>
          <div className={styles.contact_info}>
            <h2>Family Party Sp. z o.o.</h2>
            <span>ul. Krakowska 62d,</span>
            <span>32-090 Słomniki</span>
            <span>NIP: 682-177-77-38</span>
          </div>
        </div>
      </section>
    </>
  );
}

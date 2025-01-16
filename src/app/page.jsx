import Image from 'next/image';
import Link from 'next/link';

import './globals.scss';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.row}>
        <div className={styles.column}>
          <h2>O nas</h2>
          <p>
            Nasza firma oferuje kwatery pracownicze w całej Polsce. Zapewniamy
            wygodne i przystępne rozwiązania dla pracowników.
          </p>
        </div>
        <div className={styles.column}>
          <Image alt='Image' src='/img.webp' width={1072} height={712} />
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.column}>
          <Image alt='Image' src='/img.webp' width={1072} height={712} />
        </div>
        <div className={styles.column}>
          <h2>Nasze kwatery</h2>
          <p>
            Oferujemy szeroki wybór kwater pracowniczych. Odwiedź stronę
            <Link href='/kwatery'> kwatery</Link>, aby zobaczyć naszą ofertę.
          </p>
          <Link className={styles.contactButton} href='/kontakt'>
            Skontaktuj się
          </Link>
        </div>
      </section>
    </div>
  );
}

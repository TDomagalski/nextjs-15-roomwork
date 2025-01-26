import Image from 'next/image';
import Link from 'next/link';

import '../styles/globals.scss';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <section className='container_title'>
        <div className='title_image'>
          <Image alt='Image' src='/global/img.webp' width={1072} height={712} />
        </div>
        <div className='title_description'>
          <h1>O nas</h1>
          <p>
            Nasza firma oferuje kwatery pracownicze w całej Polsce. Zapewniamy
            wygodne i przystępne rozwiązania dla pracowników.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.segment}>
            <Image
              alt='Image'
              src='/global/img.webp'
              width={1072}
              height={712}
            />
          </div>
          <div className={styles.segment}>
            <h2>Nasze kwatery</h2>
            <p>
              Oferujemy szeroki wybór kwater pracowniczych. Odwiedź stronę
              <Link href='/kwatery'> kwatery</Link>, aby zobaczyć naszą ofertę.
            </p>
            <Link className='contactButton' href='/kontakt'>
              Skontaktuj się
            </Link>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.segment}>
            <Image
              alt='Image'
              src='/global/img.webp'
              width={1072}
              height={712}
            />
          </div>
          <div className={styles.segment}>
            <h2>Nasze kwatery</h2>
            <p>
              Oferujemy szeroki wybór kwater pracowniczych. Odwiedź stronę
              <Link href='/kwatery'> kwatery</Link>, aby zobaczyć naszą ofertę.
            </p>
            <Link className='contactButton' href='/kontakt'>
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

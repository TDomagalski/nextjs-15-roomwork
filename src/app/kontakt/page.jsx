import styles from './kontakt.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import SentEmailSVG from '../../../public/svg/components/SentEmailSVG';
import PhoneCallSVG from '../../../public/svg/components/PhoneCallSVG';

import CopyToClipboard from '@components/buttons/copyToClipboard/copyToClipboard';
import GoogleMap from '@components/googleMap/page';

export default function Kontakt() {
  return (
    <>
      <div className='container'>
        <div className='top_page'>
          <div className='page_title'>
            <div className='text'>
              <h1>Kontakt</h1>
              <span>Zarezerwój swój pobyt</span>
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image
              src='/global/patio.webp'
              alt='img'
              width={1512}
              height={851}
              // loading='lazy' // Wymusza leniwe ładowanie
              priority={false} // Zapewnia, że Next.js nie wymusi eager loading
              unoptimized // Zapobiega problemom z eksportem
            />
          </div>
        </div>

        <div className='container_bg'>
          <div className='container_page'>
            <h2>Nasz lokal znajduje się w miejscowości Słomniki</h2>
            <p>
              Jest to doskonała opcja dla firm prowadzących projekty w okolicy
              Krakowa, Proszowic, Miechowa, Brończyc, Czech, Prandocina,
              Januszowic i pobliskich miejscowości. Zapewniamy komfortowy nocleg
              w atrakcyjnej cenie.
            </p>
          </div>
        </div>

        <div className='container_bg'>
          <div className={styles.contactContainer}>
            <div className={styles.contactSection}>
              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>Family Party</h2>
                <p className={styles.contactText}>Sp. z o.o.</p>
              </div>
              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>ul. Krakowska 62d</h2>
                <p className={styles.contactText}>32-090 Słomniki</p>
              </div>
              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>NIP:</h2>
                <div className={styles.contactTextBox}>
                  <p className={styles.contactText}>682-177-77-38</p>
                  <CopyToClipboard
                    className={styles.btnCopy}
                    value='6821777738'
                    icon={
                      <svg
                        className={styles.copyIcon}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='9'
                          y='9'
                          width='13'
                          height='13'
                          rx='2'
                          ry='2'
                        />
                        <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
                      </svg>
                    }
                  />
                </div>
              </div>

              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>Regon:</h2>
                <div className={styles.contactTextBox}>
                  <p className={styles.contactText}>381101585</p>
                  <CopyToClipboard
                    className={styles.btnCopy}
                    value='381101585'
                    icon={
                      <svg
                        className={styles.copyIcon}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='9'
                          y='9'
                          width='13'
                          height='13'
                          rx='2'
                          ry='2'
                        />
                        <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.contactSection}>
              <div className={styles.contactBtns}>
                <div className={styles.contactBtn}>
                  <Link href='tel:+48690328659'>
                    <PhoneCallSVG />
                    <p>690-328-659</p>
                  </Link>
                </div>
                <div className={styles.contactBtn}>
                  <Link href='mailto:kwatery@roomwork.pl'>
                    <SentEmailSVG />
                    <p>kwatery@roomwork.pl</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
}

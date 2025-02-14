// 'use client';
import styles from './kontakt.module.scss';
import Image from 'next/image';

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
              {/* <p>krótki opis działalności</p> */}
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image src='/global/img.webp' alt='img' width={1072} height={712} />
          </div>
        </div>

        <div className={styles.container_flex}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Family Party</h2>
              <p className={styles.infoText}>Sp. z o.o.</p>
            </div>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>ul. Krakowska 62d</h2>
              <p className={styles.infoText}>32-090 Słomniki</p>
            </div>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>NIP:</h2>
              <div className={styles.infoTextBox}>
                <p className={styles.infoText}>682-177-77-38</p>
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
                      <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
                      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Regon:</h2>
              <div className={styles.infoTextBox}>
                <p className={styles.infoText}>381101585</p>
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
                      <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
                      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
}

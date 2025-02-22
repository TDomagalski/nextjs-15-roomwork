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
              <p>Zarezerwój swój pobyt</p>
            </div>
            <div className='box'></div>
          </div>
          <div className='page_img'>
            <Image
              src='/global/patio.webp'
              alt='img'
              width={1072}
              height={712}
              loading='lazy' // Można jawnie ustawić
              priority={false} // Zapewnia lazy loading (domyślnie dla obrazów poniżej viewportu)
            />
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
                  <a href='tel:+48690328659'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path
                          d='M21 7V3M21 3H17M21 3L15 9M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z'
                          stroke='#ffffff'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </g>
                    </svg>
                    <p>690-328-659</p>
                  </a>
                </div>
                <div className={styles.contactBtn}>
                  <a href='mailto:kwatery@roomwork.pl'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H10.2C10.7523 20 11.2 19.5523 11.2 19C11.2 18.4477 10.7523 18 10.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM18.2929 21.2929C17.9024 21.6834 17.9024 22.3166 18.2929 22.7071C18.6834 23.0976 19.3166 23.0976 19.7071 22.7071L22.7071 19.7071C23.0976 19.3166 23.0976 18.6834 22.7071 18.2929L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L19.5858 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H19.5858L18.2929 21.2929Z'
                          fill='#ffffff'
                        ></path>
                      </g>
                    </svg>
                    <p>kwatery@roomwork.pl</p>
                  </a>
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

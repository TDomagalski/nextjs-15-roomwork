import Link from 'next/link';

import styles from './footer.module.scss';
import PhoneCallSVG from '@public/svg/components/PhoneCallSVG';
import SentEmailSVG from '@public/svg/components/SentEmailSVG';

export default function Footer() {
  return (
    <div className='container'>
      <div className='container_bg'>
        <div className={styles.footer_grid}>
          <div className={styles.footer_left}>
            <div className={styles.left_company}>
              <h3>RoomWork</h3>
              <p>kwatery pracownicze w Słomnikach</p>
              <p>ul. Krakowska 62d, 32-090 Słomniki</p>
            </div>

            <div className={styles.left_socials}>
              {/* Google icon */}
              <Link href='https://maps.app.goo.gl/578mwf2EMf69g5BV7'>
                <svg
                  width='64px'
                  height='64px'
                  viewBox='0 0 48 48'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#ffffff'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      className={styles.a}
                      d='M17.8971,33.398A39.3963,39.3963,0,0,1,20.97,37.9305a22.9991,22.9991,0,0,1,1.6835,4.2849c.3512.9893.6687,1.2846,1.3513,1.2846.7439,0,1.0814-.5023,1.3421-1.2792A23.224,23.224,0,0,1,26.9837,38.02a47.8757,47.8757,0,0,1,4.5556-6.4576A41.3528,41.3528,0,0,0,36.05,25.0614a15.78,15.78,0,0,0,1.5553-6.887,13.5933,13.5933,0,0,0-1.5338-6.3579'
                    ></path>
                    <path
                      className={styles.a}
                      d='M11.7348,24.5783c1.4572,3.3284,4.2673,6.2543,6.1685,8.822L28.0015,21.4384a5.3056,5.3056,0,0,1-4.0034,1.8606,5.1725,5.1725,0,0,1-5.1967-5.19,5.5055,5.5055,0,0,1,1.1941-3.3484'
                    ></path>
                    <path
                      className={styles.a}
                      d='M28.1142,5.1151a13.519,13.519,0,0,1,7.9608,6.6991l-8.0705,9.6173a5.6064,5.6064,0,0,0,1.1941-3.3606A5.2235,5.2235,0,0,0,24.01,12.8964a5.4179,5.4179,0,0,0-4.0111,1.8575'
                    ></path>
                    <path
                      className={styles.a}
                      d='M13.5847,9.3646A13.4781,13.4781,0,0,1,23.972,4.5a13.8562,13.8562,0,0,1,4.1338.6189l-8.1142,9.64'
                    ></path>
                    <path
                      className={styles.a}
                      d='M11.7348,24.5783A15.3756,15.3756,0,0,1,10.3943,18.15a13.5161,13.5161,0,0,1,3.19-8.7852L19.9962,14.76Z'
                    ></path>
                  </g>
                </svg>
              </Link>

              {/* Google Map icon */}
              <Link href='https://maps.app.goo.gl/578mwf2EMf69g5BV7'>
                <svg
                  viewBox='0 0 48 48'
                  id='b'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#ffffff'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      className={styles.c}
                      d='m38.6591,40.3009c4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695'
                    ></path>
                    <path
                      className={styles.c}
                      d='m5.2364,33.6555c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991l-6.9777-5.4141c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541'
                    ></path>
                    <path
                      className={styles.c}
                      d='m5.2364,14.3641c-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359l5.5705-4.3391s1.5832-1.2118,1.5832-1.2118c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085'
                    ></path>
                    <path
                      className={styles.c}
                      d='m24.43,11.0609c3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641l7.1536,5.5509c1.7005-5.0818,6.45-8.8541,12.04-8.8541Z'
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>

            <div className={styles.left_btns}>
              <span>Zarezerwój pokój</span>
              <div className={styles.btn}>
                <Link href='tel:+48690328659'>
                  <PhoneCallSVG />
                  <p>690-328-659</p>
                </Link>
              </div>

              <div className={styles.btn}>
                <Link href='mailto:kwatery@roomwork.pl'>
                  <SentEmailSVG />
                  <p>kwatery@roomwork.pl</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.rooms}>
              <div className={styles.rooms_title}>
                <h3>Kwatery pracownicze</h3>
              </div>
              <div className={styles.rooms_sides}>
                <div className={styles.rooms_side}>
                  <h3>Parter</h3>
                  <ul className={styles.rooms_box}>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-1-parter'>Pokój 1</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-2-parter'>Pokój 2</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-3-parter'>Pokój 3</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-4-parter'>Pokój 4</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-5-parter'>Pokój 5</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-6-parter'>Pokój 6</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.rooms_side}>
                  <h3>Piętro</h3>
                  <ul className={styles.rooms_box}>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-1-pietro'>Pokój 1</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-2-pietro'>Pokój 2</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-3-pietro'>Pokój 3</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-4-pietro'>Pokój 4</Link>
                    </li>
                    <li className={styles.room}>
                      <Link href='/kwatery/kwatera-5-pietro'>Pokój 5</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.right_website}>
              <p>Projektowanie stron www</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

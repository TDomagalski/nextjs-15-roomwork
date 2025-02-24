import Link from 'next/link';
import Image from 'next/image';

import PhoneCallSVG from '@public/svg/components/PhoneCallSVG';
import SentEmailSVG from '@public/svg/components/SentEmailSVG';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <div className='top_page'>
        <div className='page_title'>
          <div className='text'>
            <h1>
              RoomWork <br /> Kwatery pracownicze
            </h1>
            {/* <p>krótki opis działalności</p> */}
          </div>
          <div className='box'></div>
        </div>
        <div className='page_img'>
          <Image
            src='/global/front_img.webp'
            alt='img'
            width={2016}
            height={1134}
          />
        </div>
      </div>

      <div className='container_bg'>
        <div className='container_page'>
          <div className={styles.frontpage_info}>
            <div className={styles.info_container}>
              <div className={styles.info_title}>
                <h2>RoomWork</h2>
              </div>
              <div className={styles.info_slogan}>
                <h3>Go work and relax in RoomWork</h3>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.frontpage_text}>
                <h4>
                  Komfortowe kwatery pracownicze w Słomnikach - idealne miejsce
                  dla Firm, Ekip pracowniczych jak również Osób prywatnych.
                </h4>
                <p>
                  Szukasz wygodnego i dobrze wyposażonego miejsca noclegowego
                  dla swoich pracowników w Słomnikach? Oferujemy&nbsp;elastyczne
                  opcje wynajmu kwater pracowniczych dla firm oraz klientów
                  indywidualnych.
                  <br />
                  Dysponujemy 11 pokojami, mogącymi łącznie pomieścić do 40
                  Osób. Nasze obiekty są w pełni wyposażone i dostosowane do
                  długoterminowego i krótkoterminowego pobytu. Sprawdź naszą
                  ofertę i wybierz najlepsze rozwiązanie dla siebie lub swojego
                  zespołu!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_bg'>
        <div className='container_page'>
          <div className={styles.frontpage_contact}>
            <div className={styles.contact_text}>
              <h3>Rezerwacje kwater</h3>
              <p>
                Zachęcamy do kontaktu i rezerwacji miejsc już dziś! Nasze
                kwatery pracownicze w Słomnikach to idealne rozwiązanie dla
                Twojej firmy.
              </p>
            </div>
            <div className={styles.contact_btns}>
              <Link href='tel:+48690328659' className='btn_contact'>
                <PhoneCallSVG />
                <span>690-328-659</span>
              </Link>
              <Link href='mailto:kwatery@roomwork.pl' className='btn_contact'>
                <SentEmailSVG />
                <span>kwatery@roomwork.pl</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

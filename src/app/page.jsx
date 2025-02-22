import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <div className='top_page'>
        <div className='page_title'>
          <div className='text'>
            <h1>RoomWork - Kwatery pracownicze</h1>
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
        <div className={styles.frontpageContainer}>
          <div className={styles.frontpage_info}>
            <div className={styles.frontpage_title}>
              <h2>RoomWork</h2>
            </div>
            <div className={styles.frontpage_subtitle}>
              <h3>Go work and relax in RoomWork</h3>
            </div>
            <div className={styles.frontpage_text}>
              <h4>
                Komfortowe kwatery pracownicze w Słomnikach – idealne miejsce
                dla firm i ekip pracowniczych
              </h4>
              <p>
                Szukasz wygodnego i dobrze wyposażonego miejsca noclegowego dla
                swoich pracowników w Słomnikach? Oferujemy nowoczesne kwatery
                pracownicze, które spełnią wszystkie oczekiwania. Dysponujemy 11
                pokojami, mogącymi łącznie pomieścić do 40 osób. Każdy pokój
                wyposażony jest w prywatną łazienkę, co zapewnia komfort i
                prywatność.
              </p>
              <p>
                Nasze kwatery znajdują się zarówno na parterze, jak i na
                piętrze. Na każdym poziomie dostępna jest w pełni wyposażona
                kuchnia, gdzie Goście mogą samodzielnie przygotować posiłki.
                Oferujemy również duży parking na terenie obiektu, a dla
                mieszkańców zapewniamy szybkie i darmowe WiFi.
              </p>
              <p>
                Nasza lokalizacja w Słomnikach to doskonała opcja dla firm
                prowadzących projekty w okolicy Krakowa, Proszowic, Miechowa,
                Brończyc, Czech, Prandocina, Januszowic i pobliskich
                miejscowości. Zapewniamy komfortowy nocleg w atrakcyjnej cenie.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container_bg'>
        <div className={styles.frontpageContainer}>
          <div className={styles.frontpage_info}>
            <div className={styles.frontpage_text}>
              <h4>Rezerwacje i więcej informacji</h4>
              <p>
                Zachęcamy do kontaktu i rezerwacji miejsc już dziś! Nasze
                kwatery pracownicze w Słomnikach to idealne rozwiązanie dla
                Twojej firmy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

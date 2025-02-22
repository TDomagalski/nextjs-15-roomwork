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
            width={4032}
            height={2268}
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
              <p>Do wynajęcia kwatery pracownicze w Słomnikach</p>
            </div>
            <div className={styles.frontpage_text}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                numquam enim obcaecati sit expedita. A sapiente mollitia
                nesciunt. Architecto esse ipsum facilis quia suscipit tempora
                impedit nam voluptatum, sint est?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

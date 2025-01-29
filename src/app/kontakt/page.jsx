// import styles from './kontakt.module.scss';

import Image from 'next/image';

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
            <Image
              src='/global/top_page.webp'
              alt='img'
              width={1848}
              height={1232}
            />
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
}

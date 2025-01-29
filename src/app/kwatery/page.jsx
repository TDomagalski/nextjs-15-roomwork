// import RoomPersonIcon from '@public/kwatery/room_equipment/RoomPersonIcon';
// import RoomBedIcon from '@public/kwatery/room_equipment/RoomBedIcon';
// import RoomDoubleBedIcon from '@public/kwatery/room_equipment/RoomDoubleBedIcon';
// import RoomBathroomIcon from '@public/kwatery/room_equipment/RoomBathroomIcon';

import styles from './rooms.module.scss';

import Image from 'next/image';

export default function Rooms() {
  return (
    <div className='container'>
      <div className='top_page'>
        <div className='page_title'>
          <div className='text'>
            <h1>Kwatery pracownicze</h1>
            {/* <p>krótki opis działalności</p> */}
          </div>
          <div className='box'></div>
        </div>
        <div className='page_img'>
          <Image src='/global/img.webp' alt='img' width={1072} height={712} />
        </div>
      </div>
    </div>
  );
}

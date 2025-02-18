'use client';
// components/RoomCard.js
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// import rooms from '../../../app/data/rooms';
import Slider from '@components/Slider/Slider';
import styles from './roomCard.module.scss';

// Import ikon
import RoomPersonIcon from '@public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '@public/kwatery/room_equipment/RoomBedIcon';
import RoomBunkBedIcon from '@public/kwatery/room_equipment/RoomBunkBedIcon';
import RoomBathroomIcon from '@public/kwatery/room_equipment/RoomBathroomIcon';

// Mapa ikon (aby używać dynamicznie)
const iconMap = {
  RoomPersonIcon: <RoomPersonIcon />,
  RoomBedIcon: <RoomBedIcon />,
  RoomBathroomIcon: <RoomBathroomIcon />,
};

export default function RoomCard({
  name,
  url,
  slug,
  images,
  description,
  details,
}) {
  return (
    <motion.div
      className={styles.room}
      initial={{ opacity: 0, scale: 0.9 }} // Początkowy stan
      animate={{ opacity: 1, scale: 1 }} // Końcowy stan
      exit={{ opacity: 0, scale: 0.9 }} // Animacja zanikania
      transition={{ duration: 0.3 }} // Czas trwania animacji
    >
      {/* Slider zamiast Image */}
      <div className={styles.room_img}>
        <Slider images={images} />
      </div>

      <div className={styles.room_info}>
        <div className={styles.info_title}>
          <h3>{name}</h3>
        </div>
        <div className={styles.info_icons}>
          {details.map((detail, index) => (
            <div key={index} className={styles.info_icon_box}>
              <div className={styles.info_icon}>
                {iconMap[detail.icon]} {/* Dynamiczne renderowanie ikony */}
                <div className={styles.span_container}>
                  <span>{detail.value}</span>
                  <span>{detail.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.info_description}>
          <p>{description}</p>
        </div>
        <Link href={url}>
          <button className='btn'>Zobacz szczegóły</button>
        </Link>
      </div>
    </motion.div>
  );
}

// Walidacja propTypes
RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// components/RoomCard.js
import Image from 'next/image';
import PropTypes from 'prop-types';
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
  RoomBunkBedIcon: <RoomBunkBedIcon />,
  RoomBathroomIcon: <RoomBathroomIcon />,
};

export default function RoomCard({ name, image, description, details }) {
  return (
    <div className={styles.room}>
      <div className={styles.room_img}>
        <Image src={image} alt={name} width={1072} height={712} />
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
        <div className={styles.room_button}>
          <button>Szczegóły</button>
        </div>
      </div>
    </div>
  );
}

// Walidacja propTypes
RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  personRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

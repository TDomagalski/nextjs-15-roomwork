import RoomPersonIcon from '@public/kwatery/room_equipment/RoomPersonIcon';
import RoomBedIcon from '@public/kwatery/room_equipment/RoomBedIcon';
import RoomDoubleBedIcon from '@public/kwatery/room_equipment/RoomDoubleBedIcon';
import RoomBathroomIcon from '@public/kwatery/room_equipment/RoomBathroomIcon';

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
          <Image
            src='/global/top_page.webp'
            alt='img'
            width={1848}
            height={1232}
          />
        </div>
      </div>

      <div className={styles.container_flex}>
        <div className={styles.rooms}>
          <div className={styles.room}>
            <div className={styles.room_img}>
              <Image
                src='/global/img.webp'
                alt='img'
                width={1072}
                height={712}
              />
            </div>
            <div className={styles.room_info}>
              <div className={styles.info_title}>
                <h3>Kwatera 1</h3>
              </div>
              <div className={styles.info_icons}>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomPersonIcon />
                    <div className={styles.span_container}>
                      <span>3 - 4</span>
                      <span>osoby</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBedIcon />
                    <div className={styles.span_container}>
                      <span>2</span>
                      <span>łóżka</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomDoubleBedIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>piętrowe łóżko</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBathroomIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>łazienka</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.room_button}>
                <button>Szczegóły</button>
              </div>
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.room_img}>
              <Image
                src='/global/img.webp'
                alt='img'
                width={1072}
                height={712}
              />
            </div>
            <div className={styles.room_info}>
              <div className={styles.info_title}>
                <h3>Kwatera 1</h3>
              </div>
              <div className={styles.info_icons}>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomPersonIcon />
                    <div className={styles.span_container}>
                      <span>3 - 4</span>
                      <span>osoby</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBedIcon />
                    <div className={styles.span_container}>
                      <span>2</span>
                      <span>łóżka</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomDoubleBedIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>piętrowe łóżko</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBathroomIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>łazienka</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.room_button}>
                <button>Szczegóły</button>
              </div>
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.room_img}>
              <Image
                src='/global/img.webp'
                alt='img'
                width={1072}
                height={712}
              />
            </div>
            <div className={styles.room_info}>
              <div className={styles.info_title}>
                <h3>Kwatera 1</h3>
              </div>
              <div className={styles.info_icons}>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomPersonIcon />
                    <div className={styles.span_container}>
                      <span>3 - 4</span>
                      <span>osoby</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBedIcon />
                    <div className={styles.span_container}>
                      <span>2</span>
                      <span>łóżka</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomDoubleBedIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>piętrowe łóżko</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBathroomIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>łazienka</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.room_button}>
                <button>Szczegóły</button>
              </div>
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.room_img}>
              <Image
                src='/global/img.webp'
                alt='img'
                width={1072}
                height={712}
              />
            </div>
            <div className={styles.room_info}>
              <div className={styles.info_title}>
                <h3>Kwatera 1</h3>
              </div>
              <div className={styles.info_icons}>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomPersonIcon />
                    <div className={styles.span_container}>
                      <span>3 - 4</span>
                      <span>osoby</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBedIcon />
                    <div className={styles.span_container}>
                      <span>2</span>
                      <span>łóżka</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomDoubleBedIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>piętrowe łóżko</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBathroomIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>łazienka</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.room_button}>
                <button>Szczegóły</button>
              </div>
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.room_img}>
              <Image
                src='/global/img.webp'
                alt='img'
                width={1072}
                height={712}
              />
            </div>
            <div className={styles.room_info}>
              <div className={styles.info_title}>
                <h3>Kwatera 1</h3>
              </div>
              <div className={styles.info_icons}>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomPersonIcon />
                    <div className={styles.span_container}>
                      <span>3 - 4</span>
                      <span>osoby</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBedIcon />
                    <div className={styles.span_container}>
                      <span>2</span>
                      <span>łóżka</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomDoubleBedIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>piętrowe łóżko</span>
                    </div>
                  </div>
                </div>
                <div className={styles.info_icon_box}>
                  <div className={styles.info_icon}>
                    <RoomBathroomIcon />
                    <div className={styles.span_container}>
                      <span>1</span>
                      <span>łazienka</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.room_button}>
                <button>Szczegóły</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

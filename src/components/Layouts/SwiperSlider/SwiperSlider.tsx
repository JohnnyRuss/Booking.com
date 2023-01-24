import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Thumbs,
  type Swiper as SwiperClass,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";

import styles from "./swiper.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

SwiperCore.use([Navigation, Thumbs]);

interface SwiperSliderType {
  media: string[];
  onClose: () => void;
  initialSlide: number;
}

const SwiperSlider: React.FC<SwiperSliderType> = ({
  media,
  onClose,
  initialSlide,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.swiperModal} onClick={onClose}>
      <div
        className={styles.swiperModalWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeModalBtn} onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          initialSlide={initialSlide}
          className={styles.mainSlider}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {media.map((fig, i) => (
            <SwiperSlide
              className={styles.mainSliderSlide}
              key={`main-slider--slide__${i}`}
            >
              <figure>
                <img src={fig} alt="slider" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          spaceBetween={10}
          slidesPerView={10}
          className={`${styles.thumbSlider} thumbs-swiper-main`}
        >
          {media.map((fig, i) => (
            <SwiperSlide
              className={styles.thumbSlide}
              key={`thumb-slider--slide__${i}`}
            >
              <figure>
                <img src={fig} alt="slider" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;

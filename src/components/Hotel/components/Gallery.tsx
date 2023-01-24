import React, { useState } from "react";

import styles from "./styles/gaallery.module.scss";
import { SwiperSlider } from "../../Layouts";

interface GalleryType {
  media: string[];
  alt: string;
}

const Gallery: React.FC<GalleryType> = ({ media, alt }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [initialSlide, setInitialSlide] = useState<number>(NaN);

  function handleGallery(i: number) {
    setInitialSlide(i);
    setOpenGallery(true);
  }

  return (
    <>
      <div className={styles.gallery}>
        {media.map((fig, i) => (
          <figure key={fig} onClick={() => handleGallery(i)}>
            <img src={fig} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>

      {openGallery && (
        <SwiperSlider
          media={media}
          onClose={() => setOpenGallery(false)}
          initialSlide={initialSlide}
        />
      )}
    </>
  );
};

export default Gallery;

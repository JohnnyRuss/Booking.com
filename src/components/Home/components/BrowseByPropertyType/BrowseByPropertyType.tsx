import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useAppSelector } from "../../../../store/hook";
import { selectLocationLabelsByPropertyType } from "../../../../store/selectors/homePageSelectors";

import styles from "./browseByPropertyType.module.scss";
import { SectionTitle } from "../../../Layouts";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 7,
    slidesToSlide: 3,
  },
  largeDesktop: {
    breakpoint: { max: 1920, min: 1160 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1160, min: 880 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 880, min: 560 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface BrowseByPropertyTypeType {}

const BrowseByPropertyType: React.FC<BrowseByPropertyTypeType> = (props) => {
  const data = useAppSelector(selectLocationLabelsByPropertyType);

  return (
    <div className={styles.browseByContainer}>
      <SectionTitle>browse by property type</SectionTitle>
      <Carousel
        responsive={responsive}
        className={styles.browseBySliderContainer}
        swipeable={true}
      >
        {data &&
          data.map((category, i) => (
            <div
              className={`${styles.card} ${i === 0 ? styles.firstCard : ""}`}
              key={category.id}
            >
              <figure className={styles.cardFig}>
                <img
                  src={category.thumbnail}
                  alt={category.type}
                  loading="lazy"
                />
              </figure>
              <div className={styles.cardDesc}>
                <Link to="/hotels" state={{ type: category.type }}>
                  <span className={styles.title}>{category.type}</span>
                </Link>
                <span className={styles.count}>{category.count}</span>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default BrowseByPropertyType;

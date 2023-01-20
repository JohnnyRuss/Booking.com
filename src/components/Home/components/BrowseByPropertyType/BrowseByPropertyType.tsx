import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import data from "./data.json";

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
    breakpoint: { max: 1920, min: 1580 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1580, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

interface BrowseByPropertyTypeType {}

const BrowseByPropertyType: React.FC<BrowseByPropertyTypeType> = (props) => {
  return (
    <div className={styles.browseByContainer}>
      <SectionTitle>browse by property type</SectionTitle>
      <Carousel
        responsive={responsive}
        className={styles.browseBySliderContainer}
        swipeable={true}
      >
        {data.map((category, i) => (
          <div
            className={`${styles.card} ${i === 0 ? styles.firstCard : ""}`}
            key={category.id}
          >
            <figure className={styles.cardFig}>
              <img src={category.fig} alt={category.title} />
            </figure>
            <div className={styles.cardDesc}>
              <span className={styles.title}>{category.title}</span>
              <span className={styles.count}>{category.count}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrowseByPropertyType;

import React from "react";

import styles from "./ratingBox.module.scss";
interface RatingBoxType {
  rating: number;
}

const RatingBox: React.FC<RatingBoxType> = ({ rating }) => {
  return <span className={styles.rate}>{rating}</span>;
};

export default RatingBox;

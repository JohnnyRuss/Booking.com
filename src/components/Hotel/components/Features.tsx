/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./styles/features.module.scss";
import { localFeatures } from "./localeFeatures";

import { HotelFeaturesT } from "../../../interface/db/hotel.types";
interface FeaturesType {
  features: HotelFeaturesT;
}

const Features: React.FC<FeaturesType> = ({ features }) => {
  const [activeFeatures, setactiveFeatures] = useState<string[]>();

  useEffect(() => {
    setactiveFeatures(
      Object.keys(features)
        .map((key) =>
          features[key as keyof typeof features] === true ? key : ""
        )
        .filter((key) => key !== "")
    );
  }, []);

  return (
    <div className={styles.featuresList}>
      {activeFeatures?.[0] &&
        activeFeatures.map((key) => (
          <div key={nanoid()} className={styles.featureItem}>
            <span className={styles.iconBox}>
              {localFeatures[key as keyof typeof localFeatures].icon}
            </span>
            <span className={styles.featureLabel}>
              {localFeatures[key as keyof typeof localFeatures].label}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Features;

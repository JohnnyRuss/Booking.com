/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import calcDays from "../../lib/calcDays";
import { useAppSelector } from "../../store/hook";
import { selectHotel } from "../../store/selectors/hotelsSelector";
import { useWindowScroll } from "../../hooks";

import styles from "./components/styles/hotel.module.scss";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Features from "./components/Features";

const Hotel: React.FC = () => {
  useWindowScroll();

  const [daysToStay, setDaysToStay] = useState<number>(NaN);

  const { state } = useLocation();
  const dateRange = state?.dateRange;
  const users = state?.dateRange;

  const data = useAppSelector(selectHotel);

  useEffect(() => {
    dateRange?.[0] &&
      setDaysToStay(
        calcDays(dateRange[0] || new Date(), dateRange[1] || new Date())
      );
  }, []);

  return (
    <div className={styles.hotel}>
      {data && (
        <div className={styles.wrapper}>
          <Header
            freeCancelation={data.freeCancelation}
            location={data.location}
            minPrice={data.minPrice}
            name={data.name}
            rating={data.rating}
          />

          <Gallery media={data.media} alt={data.name} />

          <Features features={data.features} />

          <Description
            description={data.description}
            label={data.label}
            minPrice={data.minPrice}
            daysToStay={daysToStay}
          />
        </div>
      )}
    </div>
  );
};

export default Hotel;

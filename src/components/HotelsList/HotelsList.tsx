import React from "react";

import { useWindowScroll } from "../../hooks";

import styles from "./components/styles/hotelsList.module.scss";
import HotelsAside from "./components/HotelsAside";
import HotelsRow from "./components/HotelsRow";

const HotelsList: React.FC = () => {
  useWindowScroll();

  return (
    <div className={styles.hotelsContainer}>
      <div className={styles.wrapper}>
        <HotelsAside />
        <HotelsRow />
      </div>
    </div>
  );
};

export default HotelsList;

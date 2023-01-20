import React from "react";

import styles from "./components/styles/hotelsList.module.scss";
import HotelsAside from "./components/HotelsAside";
import HotelsRow from "./components/HotelsRow";

interface HotelsListType {}

const HotelsList: React.FC<HotelsListType> = (props) => {
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

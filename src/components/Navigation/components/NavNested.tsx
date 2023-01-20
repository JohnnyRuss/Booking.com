import React from "react";

import styles from "./styles/navNested.module.scss";
import { BiBed } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { MdFlightTakeoff, MdAttractions, MdLocalTaxi } from "react-icons/md";

interface NavNestedType {}

const NavNested: React.FC<NavNestedType> = (props) => {
  return (
    <div className={styles.navNested}>
      <div className={styles.navNestedItem}>
        <span className={styles.iconBox}>
          <BiBed />
        </span>
        <span className={styles.label}>stays</span>
      </div>
      <div className={styles.navNestedItem}>
        <span className={styles.iconBox}>
          <MdFlightTakeoff />
        </span>
        <span className={styles.label}>flights</span>
      </div>
      <div className={styles.navNestedItem}>
        <span className={styles.iconBox}>
          <AiFillCar />
        </span>
        <span className={styles.label}>car rentals</span>
      </div>
      <div className={styles.navNestedItem}>
        <span className={styles.iconBox}>
          <MdAttractions />
        </span>
        <span className={styles.label}>attractions</span>
      </div>
      <div className={styles.navNestedItem}>
        <span className={styles.iconBox}>
          <MdLocalTaxi />
        </span>
        <span className={styles.label}>airport taxis</span>
      </div>
    </div>
  );
};

export default NavNested;

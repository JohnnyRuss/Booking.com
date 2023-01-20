import React from "react";

import styles from "./styles/navIntro.module.scss";
import { Button } from "../../Layouts";

interface NavIntroType {}

const NavIntro: React.FC<NavIntroType> = (props) => {
  return (
    <div className={styles.navIntro}>
      <h3 className={styles.navIntroTitle}>A lifetime of discounts ? It's Genius.</h3>
      <p className={styles.navIntroText}>
        Get rewarded for your trvels - unlock instant savings of 10% or more
        with a free Booking.com account
      </p>
      <Button>sign in/register</Button>
    </div>
  );
};

export default NavIntro;

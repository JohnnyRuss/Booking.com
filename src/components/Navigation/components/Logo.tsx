import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles/logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      Booking.com
    </Link>
  );
};

export default Logo;

import React from "react";

import styles from "./spinner.module.scss";
import { ImSpinner3 } from "react-icons/im";

interface SpinnerType {
  type?: "fixed" | "absolute" | "inline" | "suspense";
}

const Spinner: React.FC<SpinnerType> = ({ type = "fixed" }) => {
  return (
    <div
      className={`${styles.spinner} ${
        type === "fixed"
          ? styles.fixed
          : type === "absolute"
          ? styles.absolute
          : type === "suspense"
          ? styles.suspense
          : styles.inline
      }`}
    >
      <ImSpinner3 />
    </div>
  );
};

export default Spinner;

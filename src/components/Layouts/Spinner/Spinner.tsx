import React from "react";

import styles from "./spinner.module.scss";
import { ImSpinner3 } from "react-icons/im";

interface SpinnerType {
  type?: "fixed" | "absolute";
}

const Spinner: React.FC<SpinnerType> = ({ type = "fixed" }) => {
  return (
    <div
      className={`${styles.spinner} ${type === "fixed" ? styles.fixed : ""}`}
    >
      <ImSpinner3 />
    </div>
  );
};

export default Spinner;

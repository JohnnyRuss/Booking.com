import React from "react";

import styles from "./button.module.scss";

interface ButtonType {
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonType> = ({
  type = "primary",
  onClick = () => {},
  children,
}) => {
  return (
    <button
      data-button-re
      onClick={onClick}
      className={`${styles.button} ${
        type === "primary"
          ? styles.primary
          : type === "secondary"
          ? styles.secondary
          : type === "tertiary"
          ? styles.tertiary
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

import styles from "./styles/header.module.scss";

interface HeaderType {
  thumbnail: string;
}

const Header: React.FC<HeaderType> = ({ thumbnail }) => {
  return (
    <div className={styles.articleHeader}>
      <figure className={styles.articleFig}>
        <img src={thumbnail} alt="article head thumbnail" loading="lazy" />
      </figure>
    </div>
  );
};

export default Header;

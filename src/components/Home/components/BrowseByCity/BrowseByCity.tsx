import React from "react";

import styles from "./browseByCity.module.scss";

import data from "./data.json";

interface BrowseByCityType {}

const BrowseByCity: React.FC<BrowseByCityType> = (props) => {
  return (
    <div className={styles.browseByCity}>
      {data.map((city) => (
        <div className={styles.browseByCityItem} key={city.id}>
          <figure className={styles.browseByCityItemFig}>
            <img src={city.fig} alt={city.title} />
          </figure>
          <div className={styles.browseByCityItemDesc}>
            <span className={styles.title}>{city.title}</span>
            <span className={styles.countBox}>
              <span>{city.count}</span>
              <span>property</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseByCity;

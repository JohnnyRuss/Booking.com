import React from "react";

import data from "./data.json";

import styles from "./exploreCountry.module.scss";
import { SectionTitle } from "../../../Layouts";

interface ExploreCountryType {}

const ExploreCountry: React.FC<ExploreCountryType> = (props) => {
  return (
    <div className={styles.exploreCountry}>
      <SectionTitle>explore georgia</SectionTitle>
      <div className={styles.cardsList}>
        {data.map((card) => (
          <div className={styles.card} key={card.id}>
            <figure className={styles.cardFig}>
              <img src={card.fig} alt={card.title} />
            </figure>
            <div className={styles.cardDesc}>
              <span className={styles.title}>{card.title}</span>
              <span className={styles.count}>
                <span>{card.count}</span>
                <span>properties</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCountry;

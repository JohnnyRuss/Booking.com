import React from "react";

import data from "./data.json";

import styles from "./inspiration.module.scss";
import { SectionTitle } from "../../../Layouts";

interface InspirationType {}

const Inspiration: React.FC<InspirationType> = (props) => {
  return (
    <div className={styles.inspiration}>
      <SectionTitle>get inspiration for your next trip</SectionTitle>
      <div className={styles.inspirationsList}>
        {data.map((card) => (
          <div className={styles.inspirationsListItem} key={card.thumbnail}>
            <figure className={styles.inspirationsListItemFig}>
              <img src={card.thumbnail} alt={card.title} />
            </figure>
            <div className={styles.inspirationsListItemDesc}>
              <span className={styles.title}>{card.title}</span>
              <p className={styles.description}>
                {card.intro ? card.intro.slice(0, 150).concat("...") : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;

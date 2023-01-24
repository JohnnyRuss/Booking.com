import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../../store/hook";
import { selectArticleLabels } from "../../../../store/selectors/articleSelectors";

import styles from "./inspiration.module.scss";
import { SectionTitle } from "../../../Layouts";

interface InspirationType {}

const Inspiration: React.FC<InspirationType> = (props) => {
  const data = useAppSelector(selectArticleLabels);

  return (
    <div className={styles.inspiration}>
      <SectionTitle>get inspiration for your next trip</SectionTitle>
      <div className={styles.inspirationsList}>
        {data.map((card) => (
          <Link
            to={`/inspirations/${card._id}`}
            className={styles.inspirationsListItem}
            key={card.thumbnail}
          >
            <figure className={styles.inspirationsListItemFig}>
              <img src={card.thumbnail} alt={card.title} loading="lazy" />
            </figure>
            <div className={styles.inspirationsListItemDesc}>
              <span className={styles.title}>{card.title}</span>
              <p className={styles.description}>
                {card.intro ? card.intro.slice(0, 150).concat("...") : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;

import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../../store/hook";
import { selectExploreCountry } from "../../../../store/selectors/homePageSelectors";

import styles from "./exploreCountry.module.scss";
import { SectionTitle } from "../../../Layouts";

const ExploreCountry: React.FC = () => {
  const data = useAppSelector(selectExploreCountry);

  return (
    <div className={styles.exploreCountry}>
      <SectionTitle>
        explore
        <Link to="/hotels" state={{ country: data.country }}>
          {data.country}
        </Link>
      </SectionTitle>
      <div className={styles.cardsList}>
        {data.locations.map((card) => (
          <Link
            to="/hotels"
            state={{ city: card.city }}
            className={styles.card}
            key={card.id}
          >
            <figure className={styles.cardFig}>
              <img src={card.thumbnail} alt={card.city} loading="lazy" />
            </figure>
            <div className={styles.cardDesc}>
              <span className={styles.title}>{card.city}</span>

              <span className={styles.count}>
                <span>{card.count}</span>
                <span>properties</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCountry;

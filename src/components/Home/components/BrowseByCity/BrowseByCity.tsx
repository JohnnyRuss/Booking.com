import React from "react";
import { Link } from "react-router-dom";

import styles from "./browseByCity.module.scss";

import { useAppSelector } from "../../../../store/hook";
import { selectLocationLabelsByCity } from "../../../../store/selectors/homePageSelectors";

interface BrowseByCityType {}

const BrowseByCity: React.FC<BrowseByCityType> = (props) => {
  const data = useAppSelector(selectLocationLabelsByCity);

  return (
    <div className={styles.browseByCity}>
      {data.map((city) => (
        <Link
          to="/hotels"
          state={{ city: city.city }}
          className={styles.browseByCityItem}
          key={city.id}
        >
          <figure className={styles.browseByCityItemFig}>
            <img src={city.thumbnail} alt={city.city} loading="lazy" />
          </figure>
          <div className={styles.browseByCityItemDesc}>
            <span className={styles.title}>{city.city}</span>
            <span className={styles.countBox}>
              <span>{city.count}</span>
              <span>property</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrowseByCity;

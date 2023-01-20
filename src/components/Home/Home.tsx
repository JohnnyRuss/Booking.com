import React from "react";

import styles from "./home.module.scss";
import {
  BrowseByPropertyType,
  BrowseByCity,
  ExploreCountry,
  Inspiration,
} from "./components";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <BrowseByPropertyType />
        <BrowseByCity />
        <ExploreCountry />
        <Inspiration />
      </div>
    </div>
  );
};

export default Home;

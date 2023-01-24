import React from "react";

import { useAppSelector } from "../../store/hook";
import { selectHomePageLoadingState } from "../../store/selectors/homePageSelectors";

import styles from "./home.module.scss";
import {
  BrowseByPropertyType,
  BrowseByCity,
  ExploreCountry,
  Inspiration,
} from "./components";
import { Spinner } from "../Layouts";

const Home: React.FC = () => {
  const { loading, error } = useAppSelector(selectHomePageLoadingState);

  return (
    <div className={styles.homeContainer}>
      {loading && <Spinner />}
      {!loading && !error && (
        <div className={styles.homeWrapper}>
          <BrowseByPropertyType />
          <BrowseByCity />
          <ExploreCountry />
          <Inspiration />
        </div>
      )}
    </div>
  );
};

export default Home;

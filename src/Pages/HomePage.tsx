/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import useHomePageQuery from "../hooks/api/useHomePageQuery";

import Home from "../components/Home/Home";

const HomePage: React.FC = () => {
  const { getHomePageQuery } = useHomePageQuery();

  useEffect(() => {
    getHomePageQuery();
  }, []);

  return <Home />;
};

export default HomePage;

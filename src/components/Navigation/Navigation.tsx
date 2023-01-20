import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./components/styles/navigation.module.scss";
import NavMain from "./components/NavMain";
import NavNested from "./components/NavNested";
import NavIntro from "./components/NavIntro";
import NavFilter from "./components/NavFilter";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <NavMain />
        <NavNested />
        {pathname === "/" && (
          <>
            <NavIntro />
            <NavFilter />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

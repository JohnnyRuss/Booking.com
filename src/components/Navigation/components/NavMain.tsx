import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles/navMain.module.scss";
import Logo from "./Logo";
import { Button } from "../../Layouts";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface NavMainType {}

const NavMain: React.FC<NavMainType> = (props) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.navMain}>
      <Logo />
      <div className={styles.navActions}>
        {!["/register", "/login"].includes(pathname) && (
          <>
            <span>PLN</span>
            <span>F</span>
            <span className={styles.questions}>
              <AiOutlineQuestionCircle />
            </span>
            <Button type="tertiary">list your property</Button>
          </>
        )}
        <Button type="secondary">
          <Link to="/register">register</Link>
        </Button>
        <Button type="secondary">
          <Link to="/login">sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavMain;

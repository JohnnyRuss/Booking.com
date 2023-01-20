import React from "react";

import styles from "./styles/navMain.module.scss";
import Logo from "./Logo";
import { Button } from "../../Layouts";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface NavMainType {}

const NavMain: React.FC<NavMainType> = (props) => {
  return (
    <div className={styles.navMain}>
      <Logo />
      <div className={styles.navActions}>
        <span>PLN</span>
        <span>F</span>
        <span className={styles.questions}>
          <AiOutlineQuestionCircle />
        </span>
        <Button type="tertiary">list your property</Button>
        <Button type="secondary">register</Button>
        <Button type="secondary">sign in</Button>
      </div>
    </div>
  );
};

export default NavMain;

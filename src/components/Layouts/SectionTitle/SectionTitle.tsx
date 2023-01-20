import React from "react";

import styles from "./sectionTitle.module.scss";

interface SectionTitleType {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleType> = ({ children }) => {
  return <h6 className={styles.sectionTitle}>{children}</h6>;
};

export default SectionTitle;

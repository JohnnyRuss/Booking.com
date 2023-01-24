import React from "react";

import styles from "./auth.module.scss";

const Register: React.FC = () => {
  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm}>
        <div className={styles.inpField}>
          <label className={styles.inpLabel} htmlFor="email">
            email
          </label>
          <input
            className={styles.inp}
            type="text"
            placeholder="email"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.inpField}>
          <label className={styles.inpLabel} htmlFor="password">
            password
          </label>
          <input
            className={styles.inp}
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;

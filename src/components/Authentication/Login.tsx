import React from "react";

import styles from "./auth.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm}>Register</form>
    </div>
  );
};

export default Login;

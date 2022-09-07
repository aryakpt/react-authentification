import React from "react";
import styles from "./Login.module.css";

import { LoginForm } from "../../components";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;

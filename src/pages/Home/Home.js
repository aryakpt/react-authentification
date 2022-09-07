import React, { useContext } from "react";
import { AuthContext } from "../../contexts";
import styles from "./Home.module.css";

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={styles.home}>
      <div className={styles["home-container"]}>
        <section className={styles["home-section-1"]}>
          <h1>Welcome Back! {authCtx.sessionName}</h1>
        </section>
      </div>
    </div>
  );
};

export default Home;

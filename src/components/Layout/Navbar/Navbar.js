import React, { useContext } from "react";
import { Button } from "../../";
import styles from "./Navbar.module.css";
import { AuthContext } from "../../../contexts";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles[`navbar-container`]}>
        <div className={styles[`navbar-brand`]}>
          <p>Navbar</p>
        </div>
        <div className={styles[`navbar-nav`]}>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About</p>
            </li>
          </ul>
          <Button className="btn-primary" onClick={authCtx.logoutHandler}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { vw, mobileBreakpoint, getViewport } from "../../utility";

export const Header = props => {
  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [headerDisabled, setHeaderDisabled] = useState(
    vw > mobileBreakpoint ? true : false
  );

  const toggleMenu = () => {
    setToggleDisplay(!toggleDisplay);
  };

  const responsiveChange = () => {
    const currentVw = getViewport()[0];

    if (currentVw > mobileBreakpoint) {
      setToggleDisplay(true);
      setHeaderDisabled(true);
    } else if (currentVw <= mobileBreakpoint) {
      setToggleDisplay(false);
      setHeaderDisabled(false);
    }
  };

  window.addEventListener("resize", responsiveChange);

  const loggedIn = (
    <div className={`${toggleDisplay ? null : styles.block} ${styles.header}`}>
      <div className={`${toggleDisplay ? null : styles.hidden} ${styles.logo}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>My Profile</Link>
      </div>
      <button
        className={styles["header-button"]}
        disabled={headerDisabled}
        onClick={toggleMenu}
      >
        <h1>Give It A Shot</h1>
      </button>
      <div
        className={`${toggleDisplay ? null : styles.hidden} ${styles.links}`}
      >
        <a href="/logout" onClick={props.logout}>
          Log Out
        </a>
      </div>
    </div>
  );

  const loggedOut = (
    <>
      <h1>Give It A Shot</h1>
    </>
  );
  return <header>{props.currentUser ? loggedIn : loggedOut}</header>;
};

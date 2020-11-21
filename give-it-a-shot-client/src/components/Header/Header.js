import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = props => {
  const loggedIn = (
    <>
      <div className="logo">
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>My Profile</Link>
      </div>
      <h1>Give It A Shot</h1>
      <div className="links">
        <a href="/logout" onClick={props.logout}>
          Log Out
        </a>
      </div>
    </>
  );

  const loggedOut = (
    <>
      <h1>Give It A Shot</h1>
    </>
  );
  return <header>{props.currentUser ? loggedIn : loggedOut}</header>;
};

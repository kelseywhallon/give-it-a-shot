import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = props => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>Home!</Link>
      </div>
      <div className="links">
        <a href="/logout" onClick={props.logout}>
          Log Out
        </a>
      </div>
    </header>
  );
};

export default Header;

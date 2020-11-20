import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function ButtonLink(props) {
  return (
    <button className={props.className}>
      <Link className="link" to={props.path}>
        {props.text}
      </Link>
    </button>
  );
}

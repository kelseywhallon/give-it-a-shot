import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink(props) {
  return (
    <button className={props.className}>
      <Link to={props.path}>{props.text}</Link>
    </button>
  );
}

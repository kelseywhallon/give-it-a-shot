import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink(props) {
  return (
    <button>
      <Link to={props.path}>{props.text}</Link>
    </button>
  );
}

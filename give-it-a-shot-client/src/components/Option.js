import React from "react";

export default function Option(props) {
  return (
    <a href={props.link} className={props.className}>
      <img src={props.image} alt="" />
      {props.name}
    </a>
  );
}

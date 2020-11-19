import React from "react";

export default function Option(props) {
  return typeof props.link === "string" ? (
    <a href={props.link} className={props.className}>
      <OptionContent name={props.name} image={props.image} />
    </a>
  ) : (
    <button onClick={props.link} className={props.className}>
      <OptionContent name={props.name} image={props.image} />
    </button>
  );
}

function OptionContent(props) {
  return (
    <>
      <img src={props.image} alt="" />
      {props.name}
    </>
  );
}

import React from "react";

export default function Option(props) {
  return typeof props.action === "string" ? (
    <OptionLink
      className={props.className}
      name={props.name}
      image={props.image}
      link={props.action}
    />
  ) : (
    <OptionButton
      className={props.className}
      name={props.name}
      image={props.image}
      onClick={props.action}
    />
  );
}

function OptionLink(props) {
  return (
    <a href={props.link} className={props.className}>
      <OptionContent name={props.name} image={props.image} />
    </a>
  );
}

function OptionButton(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
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

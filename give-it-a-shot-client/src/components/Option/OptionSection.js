import React from "react";
import Option from "./Option";

//figure out how best to use this
export function OptionSection(props) {
  return (
    <>
      {/* (...) is an implicit return; no need to use return keyword */}
      {props.options.map(option => (
        <Option
          key={option.key}
          className={option.className}
          name={option.name}
          image={option.image}
          action={option.action}
        />
      ))}
      <button onClick={options.button.onClick}>{options.button.text}</button>
    </>
  );
}

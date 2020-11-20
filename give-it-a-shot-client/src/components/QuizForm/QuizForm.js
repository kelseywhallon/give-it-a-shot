import React from "react";
import Option from "../Option";

export function QuizForm(props) {
  const handleSubmit = e => {
    e.preventDefault();

    props.addToResults();
  };

  return (
    <div style={{ display: "flex", flexFlow: "column wrap" }}>
      <h1>{props.question.title}</h1>
      {/* (...) is an implicit return; no need to use return keyword */}
      {props.question.options.map(option => (
        <Option
          key={option.name}
          className=""
          name={option.name}
          image={option.image}
          action={() => props.setSelected(option.name)}
        />
      ))}
      <div type="text">{props.selected}</div>
      <button type="submit" onClick={handleSubmit}>
        {props.question.submitText}
      </button>
    </div>
  );
}

import React from "react";

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
        <div key={option.name} style={{ maxWidth: "400px" }}>
          <img src={option.image} alt="" />
          <button onClick={() => props.setSelected(option.name)}>
            {option.name}
          </button>
        </div>
      ))}
      <div type="text">{props.selected}</div>
      <button type="submit" onClick={handleSubmit}>
        {props.question.submitText}
      </button>
    </div>
  );
}

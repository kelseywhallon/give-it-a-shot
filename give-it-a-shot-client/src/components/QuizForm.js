import React from "react";

export default function QuizForm(props) {
  const handleSubmit = e => {
    e.preventDefault();

    props.addToResults();
  };

  console.log(props);

  return (
    <div style={{ display: "flex", flexFlow: "column wrap" }}>
      {/* temporary inline styles to test functionality   */}
      <h1>{props.question.title}</h1>
      {props.question.options.map(option => (
        <button key={option} onClick={() => props.setSelected(option)}>
          {option}
        </button>
      ))}
      <button type="submit" onClick={handleSubmit}>
        {props.question.submitText}
      </button>
    </div>
  );
}

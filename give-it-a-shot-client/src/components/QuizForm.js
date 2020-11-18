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
        <div key={option.name} style={{ maxWidth: "400px" }}>
          <img src={option.image} alt="" />
          <button onClick={() => props.setSelected(option.name)}>
            {option.name}
          </button>
        </div>
      ))}
      <input type="text" value={props.selected} />
      <button type="submit" onClick={handleSubmit}>
        {props.question.submitText}
      </button>
    </div>
  );
}

import React from "react";

export default function QuizForm(props) {
  const handleSubmit = e => {
    e.preventDefault();

    console.log(props.option);

    props.addToResults(props.option);
  };

  return (
    <>
      <h1>{props.title}</h1>
      {props.options.map(option => (
        <div key={option} onClick={() => props.setSelected(option)}>
          {option}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>
        {props.submitText}
      </button>
    </>
  );
}

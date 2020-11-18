import React, { useState, useEffect } from "react";
import QuizForm from "../../components/QuizForm";
import DrinksApi from "../../backend/drinks";

export function Quiz() {
  // cool way to let user know their selection worked: update submit button with their choice, e.g. "I'm feeling _____" with ____ changing based on their selection

  const [question, setQuestion] = useState({
    id: 1,
    title: "",
    field: "",
    options: [],
    submitText: ""
  });
  const [selected, setSelected] = useState({});
  const [results, setResults] = useState({});

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);
  };

  useEffect(() => {
    console.log();
    DrinksApi.nextQuestion().then(data => {
      console.log(data);
      setQuestion(data);
    });
  }, []);

  function fetchLiquor() {
    DrinksApi.getLiquor().then(data => {
      console.log(data);
    });
  }

  return (
    <>
      <QuizForm
        question={question}
        setSelected={setSelected}
        addToResults={addToResults}
      />
    </>
  );
}

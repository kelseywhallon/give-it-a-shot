import React, { useState, useEffect } from "react";
import QuizForm from "../../components/QuizForm";
import DrinksApi from "../../backend/drinks";

export function Quiz() {
  const [question, setQuestion] = useState({
    id: 1,
    title: "",
    field: "",
    options: [],
    submitText: ""
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState("");
  const [results, setResults] = useState({});

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);
    setCurrentPage(currentPage + 1);
    getNextQuestion();
  };

  useEffect(getNextQuestion, [currentPage]);

  function getNextQuestion() {
    DrinksApi.nextQuestion(currentPage).then(data => {
      setQuestion(data);
    });
  }

  return (
    <>
      <QuizForm
        question={question}
        selected={selected}
        setSelected={setSelected}
        addToResults={addToResults}
      />
    </>
  );
}

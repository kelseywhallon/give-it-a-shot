import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import QuizForm from "../../components/QuizForm";
import DrinksApi from "../../backend/drinks";

export function Quiz() {
  const [question, setQuestion] = useState({
    id: 1,
    title: "",
    field: "",
    options: [],
    submitText: "",
    numPages: 0
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState("");
  const [results, setResults] = useState({});
  const [nextPage, setNextPage] = useState(false);

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);

    if (currentPage + 1 >= question.numPages) {
      console.log("yay");
      setNextPage(true);
    } else {
      setCurrentPage(currentPage + 1);
      getNextQuestion();
    }
  };

  useEffect(getNextQuestion, [currentPage]);

  function getNextQuestion() {
    DrinksApi.nextQuestion(currentPage).then(data => {
      console.log(data);
      setQuestion(data);
    });
  }

  return (
    <>
      {" "}
      {nextPage ? (
        <Redirect to="/results" />
      ) : (
        <QuizForm
          question={question}
          selected={selected}
          setSelected={setSelected}
          addToResults={addToResults}
        />
      )}
    </>
  );
}

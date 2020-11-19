import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import QuizForm from "../../components/QuizForm";
import Results from "../../components/Results";
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

  const [drinks, setDrinks] = useState([]);

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);

    // exit condition, if we reach the end of the questions, go to next page
    if (currentPage + 1 >= question.numPages) {
      console.log("yay");
      DrinksApi.getResults(results).then(data => {
        console.log(data);
        setDrinks(data);
      });
    } else {
      setCurrentPage(currentPage + 1);
      getNextQuestion();
    }
  };

  useEffect(getNextQuestion, [currentPage]);

  function getNextQuestion() {
    DrinksApi.nextQuestion(currentPage).then(data => {
      setQuestion(data);
    });
  }

  return (
    <>
      {drinks.length !== 0 ? (
        <Results drinks={drinks} />
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

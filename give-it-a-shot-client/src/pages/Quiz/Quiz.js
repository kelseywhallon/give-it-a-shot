import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { QuizForm } from "../../components/QuizForm";
import { Results } from "../../components/Results";
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

  // results state
  /**
   * look into changing to results page like this:
   * props.history.push({
  pathname: '/somePlace',
  state: data_you_need_to_pass
});
   */
  const [drinks, setDrinks] = useState([]);
  const [shownIndex, setShownIndex] = useState(0);
  const [shownDrinks, setShownDrinks] = useState([]);

  const getResults = () => {
    DrinksApi.getResults(results).then(data => {
      setDrinks(data);
      if (data.length > 3) {
        setShownIndex(3);
        setShownDrinks([data[0], data[1], data[2]]);
      }
    });
  };

  const getMoreDrinks = () => {
    const newDrinks = [];
    for (let i = shownIndex; i < 3 + shownIndex; i++) {
      if (i >= drinks.length) {
        break;
      }
      newDrinks.push(drinks[i]);
    }

    if (newDrinks.length === 0) {
      console.log("hsdhsdhsh");
      // set another state variable with text to say no more?
    } else {
      setShownIndex(shownIndex + newDrinks.length);
      setShownDrinks(newDrinks);
    }
  };

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);

    // exit condition, if we reach the end of the questions, go to next page
    if (currentPage + 1 >= question.numPages) {
      getResults();
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
        <Results drinks={shownDrinks} getMoreDrinks={getMoreDrinks} />
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

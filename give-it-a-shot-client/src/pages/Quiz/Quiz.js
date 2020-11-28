import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { QuizForm } from "../../components/QuizForm";
import { Results } from "../../components/Results";
import DrinksApi from "../../backend/drinks";

export function Quiz(props) {
  //TODO: implement going back
  const backListener = props.history.listen((location, action) => {
    if (action === "POP") {
      console.log("hiiiii");
      // props.history.goBack();
    }
  });

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
      if (data.length > 2) {
        setShownIndex(2);
        setShownDrinks([data[0], data[1]]);
      }
    });
  };

  const getMoreDrinks = () => {
    for (let i = shownIndex; i < 2 + shownIndex; i++) {
      if (i >= drinks.length) {
        break;
      }
      shownDrinks.push(drinks[i]);
    }

    if (shownDrinks.length >= drinks.length) {
      console.log("hsdhsdhsh");
      // set another state variable with text to say no more?
    } else {
      setShownIndex(shownDrinks.length);
      setShownDrinks(shownDrinks);
    }
  };

  const addToResults = () => {
    results[question.field] = selected;
    setResults(results);

    props.history.push({
      pathname: "/quiz",
      state: {
        question: question,
        currentPage: currentPage,
        selected: selected,
        results: results,
        drinks: drinks,
        shownIndex: shownIndex,
        shownDrinks: shownDrinks
      }
    });

    // exit condition, if we reach the end of the questions, go to next page
    if (currentPage + 1 >= question.numPages) {
      getResults();
    } else {
      setCurrentPage(currentPage + 1);
      getNextQuestion();
    }
  };

  useEffect(() => {
    getNextQuestion();

    return function() {
      console.log("yooo");
      backListener();
    };
  }, [currentPage]);

  function getNextQuestion() {
    DrinksApi.nextQuestion(currentPage).then(data => {
      setQuestion(data);
    });
  }

  //TODO: use react contexts to pass down current user
  return (
    <>
      {drinks.length !== 0 ? (
        <Results
          drinks={shownDrinks}
          getMoreDrinks={getMoreDrinks}
          currentUser={props.currentUser}
        />
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

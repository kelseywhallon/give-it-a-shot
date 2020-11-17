import React, { useState, useEffect } from "react";
import QuizForm from "../../components/QuizForm";

export function Quiz() {
  /* instead of individual states, backend can send one larger object to hold entire state for that quiz. Ex:
  {
    title: "Pick Your Poison".
    field: "liquor",
    options: [
      "vodka", "gin", "whiskey"
    ]
  }
   */

  const [title, setTitle] = useState("Test Title");
  const [field, setField] = useState("liquor");
  const [options, setOptions] = useState(["vodka", "gin"]);
  const [submitText, setSubmitText] = useState("Submit Me!");
  const [selected, setSelected] = useState({});
  const [results, setResults] = useState({});

  const addToResults = () => {
    results[field] = selected;
    setResults(results);
  };

  return (
    <>
      <QuizForm
        title={title}
        options={options}
        submitText={submitText}
        setSelected={setSelected}
        addToResults={addToResults}
      />
    </>
  );
}

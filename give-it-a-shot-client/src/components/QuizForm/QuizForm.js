import React from "react";
import Option from "../Option";
import { Button } from "../Button";
import styles from "./QuizForm.module.scss";

export function QuizForm(props) {
  const handleSubmit = e => {
    e.preventDefault();

    props.addToResults();
  };

  return (
    <>
      <h1>{props.question.title}</h1>

      <div className={`${styles.options} ${styles.container}`}>
        {/* (...) is an implicit return; no need to use return keyword */}
        {props.question.options.map(option => (
          <Option
            key={option.name}
            className={styles.option}
            name={option.name}
            image={option.image}
            action={() => props.setSelected(option.name)}
          />
        ))}
      </div>
      <div type="text">{props.selected}</div>
      <Button
        type="submit"
        onClick={handleSubmit}
        content={props.question.submitText}
      />
    </>
  );
}

import React from "react";
import styles from "./Results.module.scss";
import { Option } from "../Option";
import { Button } from "../Button";

export function Results(props) {
  const options = props;
  return (
    <>
      <h1>Your Recommendations</h1>
      <div className={`${styles.options} ${styles.container}`}>
        {/* (...) is an implicit return; no need to use return keyword */}
        {props.drinks.map(drink => (
          <div key={drink.strDrink}>
            <Option
              className={styles.option}
              name={drink.strDrink}
              image={drink.strDrinkThumb}
              action={"/drink/" + drink.idDrink}
            />
            <Button
              onClick={() => console.log("I was clicked!")}
              content="Add to Favorites"
            />
          </div>
        ))}
      </div>
      <Button
        className="submitButton"
        onClick={props.getMoreDrinks}
        content="Load More Drinks"
      />
    </>
  );
}

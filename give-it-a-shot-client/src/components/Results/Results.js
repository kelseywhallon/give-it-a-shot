import React from "react";
import styles from "./Results.module.scss";
import { Option } from "../Option";
import { Button } from "../Button";
import UsersApi from "../../backend/user";

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
              onClick={() => {
                const favorite = {
                  drinkName: drink.strDrink,
                  liquor: "test",
                  cocktailDbId: drink.idDrink
                };

                console.log(props);

                UsersApi.favorite(props.currentUser, favorite);
              }}
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

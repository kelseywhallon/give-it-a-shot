import React from "react";
import styles from "./Results.module.scss";
import { Option } from "../Option";
import { Button } from "../Button";
import UsersApi from "../../backend/user";

export function Results(props) {
  const options = props;
  return (
    <>
      <h2>Your Recommendations</h2>
      <div className={`${styles.options} ${styles.container}`}>
        {/* (...) is an implicit return; no need to use return keyword */}
        {props.drinks.map(drink => (
          <div key={drink.strDrink}>
            <Option
              className={styles.option}
              name={drink.strDrink}
              idDrink={drink.idDrink}
              image={drink.strDrinkThumb}
              action={"/drink/" + drink.idDrink}
            />
            <Button
              onClick={() => {
                const favorite = {
                  drinkName: drink.strDrink,
                  liquor: "test",
                  cocktailDbId: drink.idDrink,
                  imageUrl: drink.strDrinkThumb
                };

                UsersApi.favorite(props.currentUser, favorite).then(
                  data => console.log(data)

                  //TODO: add modal here to say the favorite was added, so the user knows
                );
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

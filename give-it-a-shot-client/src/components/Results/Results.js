import React from "react";
import "./style.scss";
import Option from "../Option";

export function Results(props) {
  return (
    <div>
      <h1>Your Recommendations</h1>
      {/* (...) is an implicit return; no need to use return keyword */}
      {props.drinks.map(drink => (
        <Option
          key={drink.strDrink}
          className="drink"
          name={drink.strDrink}
          image={drink.strDrinkThumb}
          link={"/drink/" + drink.idDrink}
        />
      ))}
      <button onClick={props.getMoreDrinks}>Load More Drinks</button>
    </div>
  );
}

import React from "react";
import "./style.scss";

export function Results(props) {
  return (
    <div>
      {/* (...) is an implicit return; no need to use return keyword */}
      {props.drinks.map(drink => (
        <div className="drink">
          {drink.strDrink}
          <img src={drink.strDrinkThumb} alt="" />
        </div>
      ))}
      <button onClick={props.getMoreDrinks}>Load More Drinks</button>
    </div>
  );
}

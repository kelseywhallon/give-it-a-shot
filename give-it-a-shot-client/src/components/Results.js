import React from "react";

function Results(props) {
  return (
    <div>
      {/* (...) is an implicit return; no need to use return keyword */}
      {props.drinks.map(drink => (
        <div>{drink.strDrink}</div>
      ))}
    </div>
  );
}

export default Results;

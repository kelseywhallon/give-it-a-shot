import React from "react";
import icon from "./assets/alcohol_icon.png";
import ButtonLink from "../../components/ButtonLink";

export const Home = props => {
console.log(props)
  return props.currentUser ? (
    <div>
      <h1>Welcome Home.. Grab a Drink 🍸 </h1>
      <h2>Profile of user with ID {props.currentUser}</h2>
      <ButtonLink path="/quiz" text="Take the drink quiz" />
    </div>
  ) : (
    <>
      <img src={icon} alt="" />
      <ButtonLink path="/register" text="Register" />
      <ButtonLink path="/login" text="Login" />
    </>
  );
};

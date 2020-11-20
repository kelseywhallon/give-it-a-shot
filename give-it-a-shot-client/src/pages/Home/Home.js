import React from "react";
import icon from "./assets/alcohol_icon.png";
import ButtonLink from "../../components/ButtonLink";
import "./style.scss";

export const Home = props => {
  console.log(props);
  return (
    <div className="home">
      {props.currentUser ? (
        <>
          <h1>Welcome Home.. Grab a Drink 🍸 </h1>
          <h2>Profile of user with ID {props.currentUser}</h2>
          <ButtonLink path="/quiz" text="Take the drink quiz" />
        </>
      ) : (
        <>
          <img className="main-icon centered" src={icon} alt="" />
          <ButtonLink className="home2 centered" path="/login" text="Login" />
          <ButtonLink
            className="home3 centered"
            path="/register"
            text="Register"
          />
        </>
      )}
    </div>
  );
};

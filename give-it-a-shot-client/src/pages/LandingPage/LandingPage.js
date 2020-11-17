import React from "react";
import icon from "./alcohol_icon.png";
import ButtonLink from "../../components/ButtonLink";

export function LandingPage() {
  return (
    <>
      <img src={icon} alt="" />
      <ButtonLink path="/register" text="Register" />
      <ButtonLink path="/login" text="Login" />
    </>
  );
}

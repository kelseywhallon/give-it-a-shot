import React from "react";

// The user's home after logging in
const Home = props => {
  return (
    <div>
      <h1>Welcome Home... Grab a Drink 🍸 </h1>
      <h2>Profile of user with ID {props.currentUser}</h2>
    </div>
  );
};

export default Home;

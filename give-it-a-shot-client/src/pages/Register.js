import React, { useState } from "react";
import UserApi from "../backend/user";

const Register = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };
  const handleLastName = e => {
    setLastName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password === confirmPassword) {
      UserApi.create({ firstName, lastName, email, password }).then(data => {
        console.log("Successful register", data);
        // redirect to /login
        props.history.push("/login");
      });
    }
  };

  return (
    <div>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleFirstName}
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleLastName}
            value={lastName}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

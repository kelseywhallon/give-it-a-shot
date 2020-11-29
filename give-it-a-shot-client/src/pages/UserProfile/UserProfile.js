import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserApi from "../../backend/user";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import styles from "./UserProfile.module.scss";

export const UserProfile = props => {
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    // console.log(props.currentUser)
    UserApi.show(props.currentUser).then(data => {
      // console.log(data)
      setFirstName(data.user.firstName);
      setLastName(data.user.lastName);
      setEmail(data.user.email);
    });
  };

  const handleFirstName = e => {
    setFirstName(e.target.value);
    console.log("inside handelfirstname: " + e);
  };

  const handleLastName = e => {
    setLastName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleUpdate = e => {
    e.preventDefault();
    UserApi.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: props.currentUser
    }).then(data => {
      console.log("Successful update:", data);
      //redirect to home page
      props.history.push("/");
    });
  };

  const handleDelete = e => {
    e.preventDefault();
    UserApi.destroy({
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: props.currentUser
    }).then(deletedUser => {
      console.log(`${firstName} was deleted `);
      console.log(props.currentUser);
      if (!props.currentUser) return <Redirect to="/register" />;
    });
  };

  const logout = () => {
    localStorage.removeItem("id");
    UserApi.logout().then(res => {
      setUser(null);
    });
  };

  const fields = [
    {
      name: "First Name",
      value: firstName,
      type: "text",
      onChange: handleFirstName
    },
    {
      name: "Last Name",
      value: lastName,
      type: "text",
      onChange: handleLastName
    },
    { name: "Email", value: email, type: "email", onChange: handleEmail }
  ];

  return (
    <>
      <Form
        className={styles.margins}
        title="Account Details"
        submitText="Update Profile"
        onSubmit={handleUpdate}
        fields={fields}
      />
      <Button
        type="submit"
        onClick={(handleDelete, logout)}
        content="Delete Account"
      />
    </>
  );
};
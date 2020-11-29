import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserApi from '../backend/user';

const UserProfile = props => {
    const [user, setUser] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        // console.log(props.currentUser)
        UserApi.show(props.currentUser).then(data => {
            // console.log(data)
            setFirstName(data.user.firstName)
            setLastName(data.user.lastName)
            setEmail(data.user.email)
        })
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
        // console.log("inside handelfirstname: " + e)
    }

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
        })
            .then(data => {
                console.log("Successful update:", data);
                //redirect to home page
                props.history.push("/");
            });
    }

    const handleDelete = e => {
        e.preventDefault();
        UserApi.destroy({
            firstName: firstName,
            lastName: lastName,
            email: email,
            id: props.currentUser
        }).then(deletedUser => {
            console.log(`${firstName} was deleted `)
            console.log(props.currentUser)
            if(!props.currentUser) return <Redirect to='/register' />
        })
        
    }

    const logout = () => {
        localStorage.removeItem("id");
        UserApi.logout().then(res => {
            setUser(null);
        });
    };

    return (
        <div>
            <h4>Account Details: </h4>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        onChange={handleFirstName}
                        value={firstName}
                        type="text"
                        id="firstName"
                        name="firstName"

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
                    />
                </div>
                <button type="submit" onClick={handleUpdate}> Update Profile </button>
                <button type="submit" onClick={handleDelete, logout}>Delete Account</button>
            </form>
        </div>
    );
};

export default UserProfile;
import React, { useState, useEffect } from 'react';
import UserApi from '../backend/user';

const UpdateUser = props => {
    const [currentUser] = useState(props.currentUser);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetchUser();
    })

    const fetchUser = () => {
        console.log(props.currentUser)
        UserApi.show(currentUser).then(data => {
            console.log(data)
            return data.user
        })
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
    }

    const handleLastName = e => {
        setLastName(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        UserApi.update({ currentUser }).then(data => {
            console.log("Successful update:", data);
            //redirect to home page
            props.history.push("/");
        });
    }

    return (
        <div>
            <h4>My Info</h4>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
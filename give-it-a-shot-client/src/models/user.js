// need to update API URL ****
const REACT_APP_API_URL = "http://localhost:3001/api/v2"

export default class UserModel {
    // create function, login functon, logout functon
    // passes data used to sign a user up 
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    static login(credentials) {
        return fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: 'include',
        }).then(res => res.json())
    }

    static logout() {
        return fetch(`${REACT_APP_API_URL}/auth/logout`, {
            method: "DELETE",
            credentials: 'include'
        })
    }
}
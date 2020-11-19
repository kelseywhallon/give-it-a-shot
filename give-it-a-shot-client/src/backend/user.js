import REACT_APP_API_URL from "../config/urls";

export default class UserApi {
  static create(data) {
    return fetch(`${REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }

  static login(credentials) {
    // remember to send authorization headers
    return fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials),
      // auth headers - included with any request requiring authentication
      credentials: "include"
    }).then(res => res.json());
  }

  static logout() {
    return fetch(`${REACT_APP_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: "include"
    });
  }

  static show = (userId) => {
      return fetch(`${REACT_APP_API_URL}/users/:${userId}`, {
        method: "GET",
      }).then(res => res.json());
  }

  static update = (userId) => {
    return fetch(`${REACT_APP_API_URL}/users/:${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userId)
    }).then(res => res.json())
  }

  static destroy = (userId) => {
    return fetch(`${REACT_APP_API_URL}/users/:${userId}`, {
      method: "DELETE",
    }).then(res => res.json());
  }

}

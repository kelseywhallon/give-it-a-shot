import REACT_APP_API_URL from "../config/urls";

export default class DrinksApi {
  static getLiquor() {
    return fetch(`${REACT_APP_API_URL}/drinks/liquor`).then(res => res.json());
  }

  static nextQuestion() {
    return fetch(`${REACT_APP_API_URL}/drinks/question`).then(res =>
      res.json()
    );
  }
}

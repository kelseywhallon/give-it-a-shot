require("dotenv").config();
const db = require("../models");
const data = require("../data");
const axios = require("axios");

const cdbUrl =
  "https://www.thecocktaildb.com/api/json/v2/" +
  process.env.API_KEY +
  "/filter.php";

const nextQuestion = async (req, res) => {
  const quizQuestions = await data.drinks.getQuizQuestions();
  // get next question, whatever the path param is
  const question = quizQuestions[req.params.id];

  return res.json(question);
};

const getRecommendations = (req, res) => {
  console.log(req.body);

  axios
    .post(cdbUrl + "?i=" + req.body.liquor)
    .then(response => res.json(response.data))
    .catch(error => console.error(error));
};

module.exports = { nextQuestion, getRecommendations };

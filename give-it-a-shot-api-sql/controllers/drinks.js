const db = require("../models");
const data = require("../data");

const getDrinks = (req, res) => {
  return res.json(data.drinks.liquorOptions);
};

const nextQuestion = (req, res) => {
  // get next question, whatever the path param is
  const question = data.drinks.quizQuestions[req.params.id];

  return res.json(question);
};

module.exports = { getDrinks, nextQuestion };

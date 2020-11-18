const db = require("../models");
const data = require("../data");

const getDrinks = (req, res) => {
  return res.json(data.drinks.liquorOptions);
};

const nextQuestion = async (req, res) => {
  const container = await data.drinks.getQuizQuestions();
  console.log("plz", container[0]);
  // get next question, whatever the path param is
  const question = container[req.params.id];

  return res.json(question);
};

module.exports = { getDrinks, nextQuestion };

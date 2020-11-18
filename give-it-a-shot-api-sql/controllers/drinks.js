const db = require("../models");
const data = require("../data");

const getDrinks = (req, res) => {
  return res.json(data.drinks.liquorOptions);
};

let current = 0;
const nextQuestion = (req, res) => {
  if (current >= data.drinks.quizQuestions.length) {
    // res.json({ message: "Quiz Completed" });
    current = 1;
  }

  // get next question, increment index
  // for testin, current changed to 0
  const question = data.drinks.quizQuestions[req.params.id];
  current += 1;

  return res.json(question);
};

module.exports = { getDrinks, nextQuestion };

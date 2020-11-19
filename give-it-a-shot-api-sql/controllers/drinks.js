const db = require("../models");
const data = require("../data");

const nextQuestion = async (req, res) => {
  const quizQuestions = await data.drinks.getQuizQuestions();
  // get next question, whatever the path param is
  const question = quizQuestions[req.params.id];

  return res.json(question);
};

module.exports = { nextQuestion };

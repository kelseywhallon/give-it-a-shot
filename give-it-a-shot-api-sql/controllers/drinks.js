const db = require("../models");

const liquorOptions = ["vodka", "gin", "whiskey", "tequila", "rum"];
const ingredientOptions = ["olives", "club soda"];

const quizQuestions = [
  {
    id: 1,
    title: "Pick Your Poison",
    field: "liquor",
    options: liquorOptions,
    submitText: "Drink Up!"
  },
  {
    id: 2,
    title: "What tastes?",
    field: "ingredient",
    options: ingredientOptions,
    submitText: "Get your recommendations"
  }
];

const getDrinks = (req, res) => {
  return res.json(liquorOptions);
};

let current = 0;
const nextQuestion = (req, res) => {
  if (current >= quizQuestions.length) {
    // res.json({ message: "Quiz Completed" });
    current = 1;
  }

  // get next question, increment index
  const question = quizQuestions[current];
  current += 1;

  return res.json(question);
};

module.exports = { getDrinks, nextQuestion };

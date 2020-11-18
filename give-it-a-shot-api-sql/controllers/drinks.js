const db = require("../models");

const liquorOptions = ["vodka", "gin", "whiskey", "tequila", "rum"];

const getDrinks = (req, res) => {
  return res.json(liquorOptions);
};

module.exports = { getDrinks };

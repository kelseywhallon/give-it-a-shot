const db = require("../models");
const images = require("./images");

const getLiquorOptions = async quizPages => {
  for (const liquor of images.liquorOptions) {
    const returnedImage = await db.image.findOne({
      where: {
        name: liquor.name
      }
    });
    liquor.image = Buffer.from(returnedImage.image).toString("base64");
    // encoding to base64 removes special characters, so we need to add them back in
    liquor.image = "data:image/jpeg;base64," + liquor.image;
    console.log(liquor.image);
  }

  return images.liquorOptions;
};

const ingredientOptions = [
  { name: "Olives", image: "" },
  { name: "Club soda", image: "" }
];

const getQuizQuestions = async () => {
  return await images.load();
  // return [
  //   {
  //     id: 1,
  //     title: "Pick Your Poison",
  //     field: "liquor",
  //     options: await getLiquorOptions(),
  //     submitText: "Drink Up!"
  //   },
  //   {
  //     id: 2,
  //     title: "What tastes?",
  //     field: "ingredient",
  //     options: ingredientOptions,
  //     submitText: "Get your recommendations"
  //   }
  // ];
};

// note to self: this is ES5 syntax. differs from export const.. and export default const.. in that it exports to top level module's exports, and the other two ARE ES6! ES6 ones are used in modern ES6 import { } from "" syntax, while ES5 is for const moduleName = require("")
module.exports = { getLiquorOptions, ingredientOptions, getQuizQuestions };

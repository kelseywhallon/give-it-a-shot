const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/liquor", ctrl.drinks.getDrinks);
router.get("/question", ctrl.drinks.nextQuestion);

module.exports = router;

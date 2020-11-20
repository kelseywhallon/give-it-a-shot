const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/question/:id", ctrl.drinks.nextQuestion);
router.post("/results", ctrl.drinks.getRecommendations);
router.get("/details/:drinkId", ctrl.drinks.getDrinkDetails);

module.exports = router;

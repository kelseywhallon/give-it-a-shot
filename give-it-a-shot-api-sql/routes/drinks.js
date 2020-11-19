const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/question/:id", ctrl.drinks.nextQuestion);
router.post("/results", ctrl.drinks.getRecommendations);

module.exports = router;

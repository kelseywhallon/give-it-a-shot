const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/liquor", ctrl.drinks.getDrinks);

module.exports = router;

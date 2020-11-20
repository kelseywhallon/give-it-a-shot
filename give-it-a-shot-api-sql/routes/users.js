const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/:id", ctrl.users.show);
router.put("/:id", ctrl.users.update);
router.delete("/:id", ctrl.users.destroy);

module.exports = router;
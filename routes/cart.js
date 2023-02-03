const { cartControllers } = require("../controllers");
const router = require("express").Router();

router.get("/:id", cartControllers.getById);

module.exports = router;
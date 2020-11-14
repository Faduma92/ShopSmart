const router = require("express").Router();
const cart = require("../../controllers/cartController");

// Matches with "/api/newsletter"
router.route("/").post(cart.update);
router.route("/").get(cart.findAll);
router.route("/:id").delete(cart.delete);

module.exports = router;
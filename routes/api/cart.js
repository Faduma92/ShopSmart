const router = require("express").Router();
const cart = require("../../controllers/cartController");

// Matches with "/api/newsletter"
router.route("/").post(cart.create);
// router.route("/").get(cart.findById);
router.route("/").get(cart.findAll);
router.route("/:id").delete(cart.delete);

module.exports = router;
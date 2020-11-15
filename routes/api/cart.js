const router = require("express").Router();
const cart = require("../../controllers/cartController");

// Matches with "/api/newsletter"
// router.route("/:id").put(cart.updateOne);
router.route("/").post(cart.create);
router.route("/delete").put(cart.delete);
router.route("/").put(cart.updateOne);
router.route("/").get(cart.findAll);
router.route("/").delete(cart.deleteAll);

module.exports = router;
const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/orders"
router.route("/").post(orderController.create);

// Matches with "/api/orders/:useremail"
router.route("/:useremail").get(orderController.findById);

module.exports = router;

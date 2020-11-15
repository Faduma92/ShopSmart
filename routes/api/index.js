const router = require("express").Router();
const order = require("./order");
const product = require("./product");
const user = require("./user");
const newsletter = require("./newsletter")
const cart = require("./cart")

router.use("/user", user);
router.use("/product", product);
router.use("/order", order);
router.use("/newsletter", newsletter);
router.use("/cart", cart);

module.exports = router;

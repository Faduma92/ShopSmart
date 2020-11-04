const router = require("express").Router();
const order = require("./order");
const product = require("./product");
const user = require("./user");

router.use("/user", user);
router.use("/product", product);
router.use("/order", order);

module.exports = router;

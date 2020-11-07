const router = require("express").Router();
const order = require("./order");
const product = require("./product");
const user = require("./user");
const newsletter = require("./newsletter")

router.use("/user", user);
router.use("/product", product);
router.use("/order", order);
router.use("/newsletter", newsletter);

module.exports = router;

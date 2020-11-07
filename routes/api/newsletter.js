const router = require("express").Router();
const newsletterController = require("../../controllers/newsletterController");

// Matches with "/api/newsletter"
router.route("/").post(newsletterController.create);

module.exports = router;
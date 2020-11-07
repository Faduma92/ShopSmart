const router = require("express").Router();
const productController = require("../../controllers/productController");


router
  .route("/electronics")
  .get(productController.findElectronics)

  router
  .route("/health")
  .get(productController.findHealth)

  router
  .route("/beauty")
  .get(productController.findBeauty)

// Matches with "/api/products/:id"
  router
  .route("/id/:id")
  .get(productController.findById);

router
  .route("/name/:name")
  .get(productController.findByName);



// Matches with "/api/products"
router.route("/")
  .get(productController.findAll);


module.exports = router;

const db = require("../models");

// Defining methods for the productController
module.exports = {
  findAll: function (req, res) {
    db.Product.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err));
  },
  findById: function (req, res) {
    db.Product.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err));
  },
  findByName: function (req, res) {
    db.Product.find({ name: req.params.name})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err));
  },
  findElectronics: function (req, res) {
    console.log(req.body);
    db.Product.find({categoryname: 'Electronics'})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err))
  },
  findHealth: function (req, res) {
    console.log(req.body);
    db.Product.find({categoryname: 'Health'})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err))
  },
  findBeauty: function (req, res) {
    console.log(req.body);
    db.Product.find({categoryname: 'Beauty'})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err))
  },
};

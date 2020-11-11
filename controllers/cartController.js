const db = require("../models");

// Defining methods for the orderController
module.exports = {
      create: function(req, res) {
        db.Cart
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(404).json(err));
      },
      // findById: function(req, res) {
      //   db.Cart
      //     .find({useremail:req.params.id})
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(404).json(err));
      // },
      findAll: function (req, res) {
        db.Cart.find({})
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(404).json(err));
      },
      delete: function (req, res) {
        db.Cart.findOneAndDelete({ _id: req.params.id })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(404).json(err));
      }
};
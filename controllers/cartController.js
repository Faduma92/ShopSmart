const db = require("../models");

// Defining methods for the orderController
module.exports = {
  update: function (req, res) {
    db.Cart.create(req.body).then(({_id}) => db.Cart.findOneAndUpdate({}, {
      $push: newCart
    }, {new: true})).then(dbUser => {
      res.json(dbUser);
    }).catch(err => {
      res.json(err);
    });
  },
  findAll: function (req, res) {
    db.Cart.find({}).then((dbModel) => res.json(dbModel)).catch((err) => res.status(404).json(err));
  },
  delete: function (req, res) {
    db.Cart.findOneAndDelete({_id: req.params.id}).then((dbModel) => res.json(dbModel)).catch((err) => res.status(404).json(err));
  },
  deleteAll: function (req, res) {
    db.Cart.remove({}).then((dbModel) => res.json(dbModel)).catch((err) => res.status(404).json(err));
  }
};

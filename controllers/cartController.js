const db = require("../models");

// Defining methods for the orderController
module.exports = {
  create: function(req, res) {
    db.Cart
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  updateOne: function (req, res) {
    console.log(req.body)
   const newProduct = {
    skunumber: req.body.skunumber,
    productname: req.body.productname,
    price: req.body.price,
    stockquantity: 1
   }
    // db.Cart.updateOne(req.body).then(({_id}) => 
    db.Cart.findOneAndUpdate({useremail: req.body.useremail}, {
      $push: { products: newProduct}
    }, {new: true}).then(dbUser => {
      res.json(dbUser);
    }).catch(err => {
      res.json(err);
    });
  },
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
    console.log(req.body, 'we are are in delete')
    db.Cart.findOneAndUpdate({useremail: req.body.useremail}, {$pull: {products: {skunumber :req.body.skunumber}}}).then((dbModel) => res.json(dbModel)).catch((err) => res.status(404).json(err));
  },
  deleteAll: function (req, res) {
    db.Cart.remove({}).then((dbModel) => res.json(dbModel)).catch((err) => res.status(404).json(err));
  }
};

const db = require("../models");

// Defining methods for the orderController
module.exports = {
  create: function(req, res) {
      const email = {
        useremail: req.body.item
      }
    db.Newsletter
      .create(email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
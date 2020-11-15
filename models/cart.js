const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Cartschema = new Schema({

  useremail: {
    type: String
  },
  products: [
    {
    skunumber: {
    type: Number,
    required: true
  },
  productname: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stockquantity: {
    type: Number,
    required: true
  } 
    }
  ]
});

const Cart = mongoose.model("Cart", Cartschema);
// -----

module.exports = Cart;

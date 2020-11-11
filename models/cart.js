const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ----
const Cartschema = new Schema({
  useremail: {
    type: String
  },
  skunumber: {
    type: Number,
    required: true,
  },
  productname: { type: String, trim: true,required: true },
  productprice: { type: Number, required: true },
  orderquantity: { type: Number, required: true },
});

const Cart = mongoose.model("Cart", Cartschema);
// -----

module.exports = Cart;
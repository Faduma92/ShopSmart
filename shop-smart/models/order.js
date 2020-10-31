const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ----
const orderSchema = new Schema({
  ordernumber: {
    type: Number,
    unique: true,
    required: true,
  },
  useremail: {
    type: String
  },
  skunumber: {
    type: Number,
    required: true,
  },
  productprice: { type: Number, required: true },
  orderquantity: { type: Number, required: true },
  orderCreated: { type: Date, default: Date.now },
});

const Orders = mongoose.model("Orders", orderSchema);
// -----

module.exports = Orders;

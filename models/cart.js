const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Cartschema = new Schema({

  useremail: {
    tpye: String,
    cartCreated: {
      type: Date,
      default: Date.now
    }
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
      productimage: {
        type: String,
        trim: true,
        required: true
      },
      productprice: {
        type: Number,
        required: true
      },
      orderquantity: {
        type: Number,
        required: true
      },
      productCreated: {
        type: Date,
        default: Date.now
      }
    }
  ]


});

const Cart = mongoose.model("Cart", Cartschema);
// -----

module.exports = Cart;

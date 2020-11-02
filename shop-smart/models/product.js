const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ----
const productSchema = new Schema({
  skunumber: {
    
    type: Number,
    
    unique: true,
    
    required: true,
    
    validate: [({ length }) => length <= 6, "SKU can be maximum 6 digits long."],
  },
  
  productname: { type: String, trim: true,required: true },
  
  categoryname: { type: String, trim: true,required: true },
  
  productdescription: { type: String, trim: true, required: true },
  
  price: { type: Number, required: true },
  
  productimage: { type: String, trim: true, required: true },
  
  stockquantity: { type: Number, trim: true, required: true },
  
  productCreated: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);
// -----

module.exports = Product;

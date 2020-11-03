const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ----
const userSchema = new Schema({
  firstname: { type: String, trim: true,required: true },
  lastname: { type: String, trim: true,required: true },
  username: { type: String, trim: true, required: true },
  email: {
    type: String,
    trim: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  streetaddress: { type: String},
  city: { type: String},
  province: { type: String},
  postalcode: { type: String },
  userCreated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
// -----

module.exports = User;

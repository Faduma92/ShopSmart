const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ----
const newsletterSchema = new Schema({
  useremail: {
    type: String,
    trim: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  newsletterCreated: { type: Date, default: Date.now },
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);
// -----

module.exports = Newsletter;

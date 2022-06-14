const mongoose = require("mongoose");

const productSchem = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    picProduct: { type: String },
    desc: { type: String },
    price: { type: Number },

},
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchem);

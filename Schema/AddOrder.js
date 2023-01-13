const mongoose = require("mongoose");
// const validator = require("validator");

const AddProduct = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    productId: { type: String, required: true },
    ram: { type: String, required: true },
    rom: { type: String, required: true },
  },
  { collection: "ProductList", versionKey: false }
);
const productList = mongoose.model("ProductList", AddProduct);
module.exports = { productList };

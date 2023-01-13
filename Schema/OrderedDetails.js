const mongoose = require("mongoose");
const validator = require("validator");
const moment = require("moment");
moment.locale("en-au");
let x = Math.floor(Math.random() * 5 + 1);
const OrderDetailSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    ProductName: { type: Object, required: true },
    OrderId: { type: String, required: true },
    orderedProducts: { type: Object, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    created: { type: String, default: moment().format("L") },
    createdAt: { type: String, default: new Date() },
  },
  { collection: "OrderDetails", versionKey: false }
);
const orderDetail = mongoose.model("OrderDetails", OrderDetailSchema);
module.exports = { orderDetail };

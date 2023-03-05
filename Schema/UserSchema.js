const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    verifytoken: {
      type: String,
    },
    role: { type: String, default: "admin" },
    createdAt: { type: String, default: new Date() },
  },
  { collection: "userDatabase", versionKey: false }
);
const userModel = mongoose.model("userDatabase", UserSchema);
module.exports = { userModel };

var express = require("express");
var router = express.Router();
const { default: mongoose } = require("mongoose");
const { mongodb, dbName, dbUrl } = require("../config/dbConfig");
const { productList } = require("../schema/AddOrder");
mongoose.connect(dbUrl);
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    let newDetails = await productList.create(req.body);
    res.send({ statusCode: 200, message: "Product added successfully" });
  } catch (error) {
    console.log("my error ", error);
    res.send({ statusCode: 400, message: "Error in adding" });
  }
});
router.get("/display", async (req, res) => {
  try {
    let myList = await productList.find();
    res.send({
      statusCode: 200,
      myList,
      message: "Displaying all Products",
    });
  } catch (err) {
    res.send({ statusCode: 500, message: "Internal server in error" });
  }
});
module.exports = router;

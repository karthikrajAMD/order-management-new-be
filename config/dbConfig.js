const mongodb = require("mongodb");
const mongoose = require("mongoose");
const dbName = "B35WE_OrderManagement";
const dbUrl = `mongodb+srv://Raja_AMD:RAJAamd123@cluster0.rhksdpw.mongodb.net/${dbName}`;

module.exports = { mongodb, mongoose, dbName, dbUrl };

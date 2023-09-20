const mongoose = require('mongoose'); 
// import mongoose from "mongoose";
// import 'dotenv/config'
async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://alzaendev:admin49d@cluster0.xbwtxba.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("db connected"));
  } catch (error) {
    console.log(error);
    throw new Error("db connection fail")
  }
}


// dbConnect()

module.exports =  dbConnect



const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const express = require("express");
const subscriber = require("./models/subscriber");
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/recipe_db",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");

});

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

const company =  Subscriber.create({
  name: "ronny",
  email: "ronaldmputla@gmail.com",
  address:"woodmead",
  school:"code college",
  zipCode: 12345
});
const mice = subscriber.create({
  name:"jim",
  email:"matsobane@gmail.com",
  address:"skimming",
  school:"seritarita",
  zipCode:23445
});
// console.log(company.getInfo())

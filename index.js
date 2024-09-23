const express = require("express");
const cors = require("cors");
const mongodb = require("./config/mongodb.js");

//
mongodb.on("error", console.error.bind(console, "MongoDB connection error:"));
const app = express();
const port = 3000;
app.use(cors());
//
const mongoose = require("mongoose");
require('dotenv').config(); 


const dbURI = process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbURI, options)

module.exports = mongoose.connection;

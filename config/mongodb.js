const mongoose = require("mongoose");

const dbURI = "mongodb+srv://divyendhsuresh:Jk4RmZ4rF7kddEDL@form-data.tiwnr.mongodb.net/form-data?retryWrites=true&w=majority&appName=form-data";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbURI, options)

module.exports = mongoose.connection;

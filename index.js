const express = require("express");
const cors = require("cors");
const app = express();
const mongooseConnection = require('./config/mongodb.js');
const formDataRout = require('./routes/formDataRoutes.js');
const feedbackRout = require('./routes/feedbackRoutes.js')

const port = 3000;
app.use(cors());
app.use(express.json());

mongooseConnection.on('connected', () => {
    console.log('Mongoose is connected in index.js');
});

mongooseConnection.on('error', (err) => {
    console.error('Mongoose connection error in index.js:', err);
});

//routs
app.use("/submitbutton", formDataRout)
app.use("/feedbackbutton", feedbackRout);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require("express");
const cors = require("cors");
const mongooseConnection = require('./config/mongodb.js');
const formDataRout = require('./routes/formDataRoutes.js');
const feedbackRout = require('./routes/feedbackRoutes.js')

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

//datat base connection 
mongooseConnection.on('connected', () => {
    console.log('Mongoose is connected in index.js');
});

mongooseConnection.on('error', (err) => {
    console.error('Mongoose connection error in index.js:', err);
});
//

app.get('/', (req, res) => {
    res.send("test rout")
})
//routes
app.use("/submit", formDataRout)
app.use("/feedbacks", feedbackRout);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
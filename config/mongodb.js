const mongoose = require("mongoose");

const Booking = require("../models/currentBooking");

async function dbInitialization() {
    try {
        const dbURI =
            "mongodb+srv://divyendh:myIGlmKjgLq40fv4@cluster0.y7lftg3.mongodb.net/nodeconnect?retryWrites=true&w=majority&appName=Cluster0";
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(dbURI, options);
        console.log("Connected to MongoDB");

        // Handle MongoDB connection errors
        mongoose.connection.on(
            "error",
            console.error.bind(console, "MongoDB connection error:")
        );
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

dbInitialization();

module.exports = mongoose.connection;

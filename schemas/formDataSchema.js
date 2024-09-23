const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, // assuming a 10-digit number format
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: /^\S+@\S+\.\S+$/, // basic email validation
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5, // 5-step scale: 1 (worst) to 5 (best)
    },
    comments: {
        type: String,
        trim: true,
        maxlength: 500, // limit comment length to 500 characters
    }
});

module.exports = mongoose.model('FormData', formDataSchema);

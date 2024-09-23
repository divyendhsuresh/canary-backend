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
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
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


const FormData = mongoose.model('FormData', formDataSchema);
module.exports = FormData;

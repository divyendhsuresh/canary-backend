const express = require('express');
const router = express.Router();
const FormData = require("../schemas/formDataSchema.js");

router.post('/submit-form', async (req, res) => {
    try {
        console.log({ "test": req.body });

        const { name, contactNumber, emailAddress, rating, comments } = req.body;

        // Custom validations for mobile number and email
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!phoneRegex.test(contactNumber)) {
            return res.status(400).json({ error: 'Invalid contact number. Must be 10 digits.' });
        }

        if (!emailRegex.test(emailAddress)) {
            return res.status(400).json({ error: 'Invalid email address.' });
        }

        // Create new form data object
        const newFormData = new FormData({
            name,
            contactNumber,
            emailAddress,
            rating,
            comments,
        });

        // Save data to MongoDB
        await newFormData.save();
        res.status(201).json({ message: 'Form data saved successfully!' });

    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
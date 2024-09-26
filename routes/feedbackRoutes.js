
const express = require('express');
const router = express.Router();
const FormData = require("../schemas/formDataSchema.js");

router.get('/', async (req, res) => {
    try {
        const feedback = await FormData.find({}, 'name comments rating');
        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
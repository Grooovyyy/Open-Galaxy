const {Router} = require('express');
const router = Router();
const FeedbackModel = require('../model/FeedbackModel');
router.post('/add', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const feedback = new FeedbackModel({
        name,
        email,
        phone,
        message
    });

    try {
        const newFeedback = await feedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

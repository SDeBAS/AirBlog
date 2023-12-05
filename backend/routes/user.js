const express = require('express');
const router = express.Router();

// Import your user model or data access layer
const User = require('../models/User');

// GET user data by user ID
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;

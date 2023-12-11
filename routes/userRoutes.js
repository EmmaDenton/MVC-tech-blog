const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await User.create({
            username: username,
            email,
            password
        });

        res.status(201).json({ message: 'User created successfully', newUser});
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    // Logic to handle user login
});

module.exports = router;

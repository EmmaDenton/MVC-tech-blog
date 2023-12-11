const express = require('express');
const router = express.Router();
const Comment = require('../models/Comments'); // Adjust the path according to your project structure

// Add a comment to a post
router.post('/:postId', async (req, res) => {
    // Logic to add a comment to a post
});

// Get all comments for a post
router.get('/:postId', async (req, res) => {
    // Logic to get all comments for a specific post
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
    // Logic to delete a comment
});

module.exports = router;

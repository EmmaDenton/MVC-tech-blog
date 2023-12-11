const express = require('express');
const router = express.Router();
const Post = require('../models/Posts'); // Adjust the path according to your project structure

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            order: [['createdAt', 'DESC']] // Orders posts by createdAt in descending order
        });
        res.render('home', {
            posts: posts
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching posts');
    }
});

// Create a new post
router.post('/', async (req, res) => {
    // Logic to create a new post
});


// Get a specific post
router.get('/:postId', async (req, res) => {
    // Logic to retrieve a specific post
});

// Update a post
router.put('/:postId', async (req, res) => {
    // Logic to update a post
});

// Delete a post
router.delete('/:postId', async (req, res) => {
    // Logic to delete a post
});

module.exports = router;

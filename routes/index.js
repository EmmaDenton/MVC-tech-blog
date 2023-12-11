const router = require('express').Router();

const userRoutes = require('./userRoutes');

const commentRoutes = require('./commentRoutes');

const postRoutes = require('./postRoutes');

router.use('../models/Users', userRoutes);
router.use('../models/Posts', postRoutes);
router.use('../models/comments', commentRoutes);

module.exports = router;

const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const post = new Post({ title, content, user: user._id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

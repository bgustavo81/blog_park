const express = require('express');
const post = express.Router();
const postController = require('../controllers/post');

post.get('/post/:id', postController.getPost);
post.get('/posts', postController.getPosts);
post.post('/posts', postController.createPost);
post.patch('/posts/:id', postController.updatePost);
post.delete('/posts/:id', postController.deletePost);

module.exports = post;
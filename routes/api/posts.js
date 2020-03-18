const express = require('express');
const router = express.Router();
const Post = require("../../models/post");

//@route GET api/posts/:id
//@desc Get a single message
//@access Public
router.get("/:id", async (req, res, next) => {
    const id = req.params.id
    try {
        const result = await Post.getPostById(id);
        let status = res.status(200).json(result.rows[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
    }
});

//@route GET api/posts
//@desc Get all messages
//@access Public
router.get("/", async (req, res, next) => {
    try {
        const result = await Post.getPosts();
        res.status(200).json(result.rows);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

//@route POST api/posts
//@desc POST a message
//@access Public
router.post("/", async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;
    const post = new Post(null, title, content, userId)
    try {
        post.title = title;
        post.content = content;
        post.userId = userId;
        await post.createPost()
        const result = await Post.getLatestPostByAuthor(userId);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

//@route PATCH api/posts/:id
//@desc PATCH a message
//@access Public
router.patch("/:id", async (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    try {
        const post = await Post.getPostById(id);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        post.id = id;
        post.title = title;
        post.content = content;
        await Post.updatePost(title, content, id);
        const result = await Post.getPostById(id);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        await Post.deletePost(id)
        res.status(200).end();
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
})

module.exports = router;



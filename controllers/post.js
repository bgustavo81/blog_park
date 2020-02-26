const Post = require("../models/post");

exports.getPost = async (req, res, next) => {
    const id = req.params.id
    try {
        const result = await Post.getPostById(id);
        let status = res.status(200).json({
            message: `post ${id} was retrieved`,
            post: result.rows
        })
        console.log(status);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const result = await Post.getPosts();
        res.status(200).json({
            message: 'Fetched posts sucessfully.',
            posts: result.rows
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


exports.createPost = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;
    const post = new Post(title, content, userId)
    try {
        post.title = title;
        post.content = content;
        post.userId = userId;
        await post.createPost()
        res.status(201).end();
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updatePost = async (req, res, next) => {
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
        res.status(200).end();
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deletePost = (req, res, next) => {
    const id = req.params.id;
    try {
        Post.deletePost(id)
        .then(post => {
            if (!post) {
                const error = new Error('Could not delete post.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: "Post deleted", post: id});
        })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

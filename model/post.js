const pool = require('../services/pool');

module.exports = class Post {
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    static getPosts() {
        return pool.query(
            'SELECT * FROM posts ORDER BY id DESC'
        );
    };

    static getPostById(id) {
        return pool.query(
            'SELECT * FROM posts WHERE id = $1', 
            [id]
        );
    };

    createPost() {
        return pool.query(
            'INSERT INTO posts (title, content, userid) VALUES ($1, $2, $3)',
            [this.title, this.content, this.userId]
        )
    }

    static updatePost(title, content, id) {
        return pool.query(
            'UPDATE posts SET title = $1, content = $2 WHERE id = $3',
            [title, content, id]
        )
    }

    static deletePost(id) {
        return pool.query(
            'DELETE FROM posts WHERE id = $1', 
            [id]
        )
    }
}


// const pool = require('../services/pool');

// // GET all posts
// const getPosts = (request, response, next) => {
//     pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
//         if(error) {
//             throw error;
//         }
//         response.status(200).json(results.rows);
//     });
// };

// // GET a single post by id
// const getPostsById = (request, response, next) => {
//     const id = parseInt(request.params.id);
//     pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
//         if(error) {
//             throw error;
//         }
//         response.status(200).json(results.rows)
//     });
// };

// // POST a new post
// const createPost = (request, response, next) => {
//     const { title , body } = request.body;
//     pool.query('INSERT INTO posts (title, body) VALUES ($1, $2)', [title, body], (error, results) => {
//         if (error) {
//             throw error;
//         }
//         response.status(201).send(`Post created with Title: ${results.inseertId}`)
//     });
// };

// // PUT updated data in an existing user
// const updatePost = (request, response, next) => {
//     const id = parseInt(request.params.id);
//     const { title, body } = request.body;

//     pool.query(
//         'UPDATE posts SET title = $1, body = $2 WHERE id = $3',
//         [name, email, id],
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).send(`User modified with ID: ${id}`)
//         }
//     )
// };

// // DELETE a post 
// const deletePost = (request, response, next) => {
//     const id = parseInt(request.params.id);

//     pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).send(`User deleted with ID: ${id}`)
//     });
// };

// module.exports = {
//     getPosts,
//     getPostsById,
//     createPost,
//     updatePost,
//     deletePost
// };
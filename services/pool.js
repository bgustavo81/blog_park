const keys = require('../config/keys');
const { Pool } = require('pg');
const pool = new Pool({
    user: keys.POOL_USER,
    host: keys.POOL_HOST,
    database: keys.POOL_DATABASE,
    password: keys.POOL_PASSWORD,
    port: 5432,
    ssl: true
});

// pool.connect()
//     .then(() => console.log("Connected successfully"))
//     .then(() => pool.query("SELECT * FROM posts;"))
//     .then(() => console.table(results.rows))
//     .catch((e) => console.log())

module.exports = pool;
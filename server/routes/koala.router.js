const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pg = require('pg');

const pool = new pg.Pool({
    database: 'koala',
    host: 'localhost',
    port: 5432,
});

let koalaList = [
    {
        id: 10,
        name: 'Sparkles',
        age: 13,
        favColor: 'red',
        isReady: false,
        notes: 'n/a'
    }
]

// GET - get koala in database

router.get('/', (req, res) =>{
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText)
        .then((result) =>{
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in GET /koala', error);
            res.sendStatus(500);
        });
});



// POST


// PUT


// DELETE

module.exports = koalaRouter;
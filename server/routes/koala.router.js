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
    },
    {
        id: 11,
        name: 'Peanut',
        age: 8,
        favColor: 'purple',
        isReady: false,
        notes: 'Timid'
    }

];

// GET - get koala in database

koalaRouter.get('/', (req, res) =>{
    let queryText = `SELECT * FROM "koalas";`;
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

koalaRouter.post('/', (req, res) => {
    let newKoalas = req.body;
    console.log('adding new koalas', newKoalas);
    let queryText = `INSERT INTO koalas (name, age, favColor, isReady, notes)
        VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [newKoalas.name, newKoalas.age, newKoalas.favColor, newKoalas.isReady, newKoalas.notes])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in querytext', error);
            res.sendStatus(500);
        });
});


// PUT


// DELETE

module.exports = koalaRouter;
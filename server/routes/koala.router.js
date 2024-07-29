const express = require('express');
const koalaRouter = express.Router();

// adding test data

let koalaList = [ 
   {
    id: 1,
    name: 'Scotty',
    age: 4,
    color: 'Red',
    transfer: 'Y',
    notes: 'Born in Guatemala'
},
{
    id: 2,
    name: 'Jean',
    age: 5,
    color: 'Green',
    transfer: 'Y',
    notes: 'Allergic to lots of lava'
},
{
    id: 3,
    name: 'Ororo',
    age: 7,
    color: 'Yellow',
    transfer: 'N',
    notes: 'Loves listening to Paula (Abdul)'
},
{
    id: 4,
    name: 'K Leaf',
    age: 15,
    color: 'Purple',
    transfer: 'N',
    notes: 'Never refuses a treat.'
},
{
    id: 5,
    name: 'Charlie',
    age: 9,
    color: 'Orange',
    transfer: 'Y',
    notes: 'Favorite band is Nirvana'
},
{
    id: 6,
    name: 'Betsy',
    age: 4,
    color: 'Blue',
    transfer: 'Y',
    notes: 'Has a pet iguana'

},
];

// DB CONNECTION


// GET

koalaRouter.get('/', (req, res) => {
    console.log('in GET route');
    res.send(koalaList)
})

// POST

koalaRouter.post('/', (req, res) => {
    console.log('POST made for /koalas');
    console.log('req.body in post', req.body);

    let koalasToAdd = req.body;
    koalaList.push(koalasToAdd);
    res.sendStatus(201);
})

// PUT


// DELETE

koalaRouter.delete('/:id', (req, res) => {
    
})

module.exports = koalaRouter;
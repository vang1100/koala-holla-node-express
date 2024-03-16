const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const koalaRouter = require('./routes/koala.router');

app.use(express.json());
app.use(express.static('server/public'));

// ROUTES
app.use('/koalas', koalaRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

//adding array to test

let koalaList = [
  { name: 'Kiwi',
    age: 5,
    favoriteColor: 'purple',
    readyForTransfer: 'false',
    notes: 'Has a minor injury.'
  },
  { name: 'Mocha',
    age: 10,
    favoriteColor: 'green',
    readyForTransfer: 'true',
    notes: 'n/a'
  }
];

//GET - grabbing the koala array in koalas route
app.get('/koalas', (req, res) => {
  console.log('GET request made to /koalas');
  res.send(koalaList);
});

//POST 

app.post('/koalas', (req, res) => {
  console.log('POST made for /koalas');
  console.log(req.body);
  koalaList.push(req.body);
  res.sendStatus(201);

})
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

let koalaList = [
  { name: 'Kiwi',
    age: '5',
    favoriteColor: 'purple',
    readyForTransfer: 'false',
    notes: 'Has a minor injury.'
  }
];

app.get('/koalas', (req, res) => {
  console.log('GET request made to /koalas');
  res.send(koalaList);
});
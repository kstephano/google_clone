const express = require('express')
const cors = require('cors');

const app = express()
const artistRoute = require('./controllers/artists');
const helpers = require('./helpers/artistsFuncs');

app.use(cors());
app.use('/artists', artistRoute);

// Route for retrieve home page message
app.get('/', (req, res) => res.send('Hello World!'))

// Route for retrieving a list of artists that match the query string
app.get('/query/:query', (req, res) => {
    const results = helpers.searchArtist(req.params.query);
    try {
        if (results != null) {
            res.status(200).send(results);
        } else {
            res.status(404).send({ message: `Couldn't GET artists with search query: ${req.params.query}. No artists' names match the given string.`}); 
        }
    } catch(e) {
        console.log(e);
        res.status(404).send({ message: `Couldn't GET artists with search query: ${req.params.query}`});
    }
});

app.post('/query/:query', (req, res) => {
    const results = helpers.searchArtist(req.params.results);
    try {
        if (results != null) {
            res.status(201).send(results);
        } else {
            res.status(404).send({ message: `Couldn't POST results with search query: ${req.params.query }`});
        }
    } catch(e) {
        console.log(e);
        res.status(404).send({ message: `Couldn't POST results with search query: ${req.params.query }`});
    }
});

module.exports = app;
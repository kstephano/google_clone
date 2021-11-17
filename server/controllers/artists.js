const express = require('express');
const router = express.Router();

const helpers = require('../helpers/artistsFuncs');
const artists = require('../data/artists');

// Route for retrieving all artists
router.get('/', (req, res) => {
    try {
        res.status(200).send(artists);
    } catch(e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't GET artists`});
    }
});

// Route for retrieving a random artist
router.get('/random', (req, res) => {
    const randIndex = helpers.randomIntFromInterval(0, artists.length - 1);
    const randArtist = artists[randIndex];
    try {
        res.status(200).send(randArtist);
    } catch(e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't GET random quote with index: ${randIndex}` });
    }
});

// Route for retrieving an artist with a given name
router.get('/:name', (req, res) => {
    try {
        res.status(200).send(helpers.findArtistByName(req.params.name));
    } catch(e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't GET artist with name: ${req.params.name}. Name does not exist in database.` })
    }
});

// Route for retrieving a list of artists that match the query string
router.get('/query/:query', (req, res) => {
    const results = helpers.searchArtist(req.params.query);
    try {
        if (results != null) {
            res.status(200).send(results);
        } else {
            res.status(400).send({ message: `Couldn't GET artists with search query: ${req.params.query}. No artists' names match the given string.`}); 
        }
    } catch(e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't GET artists with search query: ${req.params.query}`});
    }
});

module.exports = router;
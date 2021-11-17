const express = require('express')
const cors = require('cors');

const app = express()
const artistRoute = require('./controllers/artists');

app.use(cors());
app.use('/artists', artistRoute);

// Route for retrieve home page message
app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;
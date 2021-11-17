const express = require('express')
const cors = require('cors');

const app = express()
const quoteRoute = require('./controllers/artists');

app.use(cors());
app.use('/artists', quoteRoute);

// Route for retrieve home page message
app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;
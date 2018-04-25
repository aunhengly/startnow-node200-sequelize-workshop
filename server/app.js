const express      = require('express');
const sequelize     = require('sequelize');
const bodyParser    = require('body-parser');
const db            = require('./db/models');

// //sequelize configuration
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());
app.use('/api/authors', require('./routes/authors'));
app.use('/api/blogs', require('./routes/blogs'));

// app.use('/api/authors', require('./db/models/Author'));
// app.use('/api/blogs', require('./db/models/Blog'));

app.get('/', (req, res) => {
    res.status(200).send('You are Connecting');
});


module.exports = app;

var imdb = require('imdb-api');
require("dotenv").config();

imdb
    .get(
        {name: 'The Toxic Avenger'}, 
        {apiKey: process.env.OMBD_ID, timeout: 30000}
    )
    .then(console.log)
    .catch(console.log);
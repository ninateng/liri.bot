
//keys
require("dotenv").config();

//importing
var axios = require("axios");

module.exports = {

    movieInfo: function ( x ) {

        //save variable paramaterized 
        var movieName = x;

        //axios to retrieve data from api
        axios
        .get( "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + process.env.OMBD_ID )
        .then( function( response ) {
        
            //script in terminal
            console.log("");
            console.log( "Title: ");
            console.log( "    " + response.data.Title );
            console.log("");
            console.log("Year Released: ")
            console.log( "    " + response.data.Year );
            console.log("");
            console.log("IMDB Rating: ");
            console.log( "    " + response.data.imdbRating );
            console.log("");
            console.log("Rotten Tomatoes Rating: ");
            console.log( "    " + response.data.Ratings[1].Value );
            console.log("");
            console.log("Country Produced: ");
            console.log( "    " + response.data.Country );
            console.log("");
            console.log("Languages: ");
            console.log( "    " + response.data.Language );
            console.log("");
            console.log("Plot: ");
            console.log( "    " + response.data.Plot );
            console.log("");
            console.log("Cast: ");
            console.log( "    " + response.data.Actors );
            console.log("");

        });
    }
}
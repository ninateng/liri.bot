
//importing files
var Concert = require('./concerts.js')
var Movie = require('./movie.js');
var Music = require('./music.js');
var DoIt = require('./doIT')
// var fs = require("fs");

//declaring variables
var command = process.argv[2];
var data = process.argv.slice(3).join("+");


switch(command.toLowerCase())
{
    //to get.. FORMAT: node liri.js concert-this __artist here__
    case "concert-this":
        Concert.concertInfo(data);
        break;
   //to get..FORMAT: node liri.js movie-this __movie name here__
    case "movie-this":
        Movie.movieInfo(data);
        break;
    //to get..FORMAT: node liri.js spotify-this-song __song name here__
    case "spotify-this-song":
        Music.musicInfo(data);
        break;
    //to get..FORMAT: node liri.js do-what-it-says.. will run whats inside
    case "do-what-it-says":
        DoIt.doIt();
        break;   
    default:
        console.log("please input a valid movie or actor name");
        break;
}

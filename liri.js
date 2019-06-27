
//importing files
var Concert = require('./concerts.js')
var Movie = require('./movie.js');
var Music = require('./music.js');

//declaring variables
var command = process.argv[2];
var data = process.argv.slice(3).join("+");

switch(command.toLowerCase())
{
    case "concert-this":
        Concert.concertInfo(data);
        break;
    case "movie-this":
        Movie.movieInfo(data);
        break;
    case "spotify-this-song":
        Music.musicInfo(data);
        break;
    // case "do-what-it-says":
    //     actor.actor(data);
    //     break;   
    default:
        console.log("please input a valid movie or actor name");
        break;
}

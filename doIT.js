
//importing files
var Concert = require('./concerts.js')
var Movie = require('./movie.js');
var Music = require('./music.js');
var fs = require("fs");


module.exports = {

    doIt: function () {

        //get data from file
        fs.readFile("random.txt", "utf8", function (error, response) {

            // error
            if (error) {
                return console.log(error);
            }

            //declaring variables from given data from txt
            var responseArr = response.split(",");
            var command = responseArr[0];
            var data = responseArr[1];

            //if command is// do this...
            switch (command.toLowerCase()) {

                case "concert-this":
                    Concert.concertInfo(data);
                    break;
                case "movie-this":
                    Movie.movieInfo(data);
                    break;
                case "spotify-this-song":
                    Music.musicInfo(data);
                    break;  
                default:
                    console.log("please input a valid movie or actor name");
                    break;
            }
        });
    }
}
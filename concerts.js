// Here we incorporate the "axios" npm package
var axios = require("axios");

var artist = "yellow+claw"
// var movieName = artist.slice(2).join("+");
// movieName = movieName.join("+");


// We then run the request with axios module on a URL with a JSON
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {

    for ( var i = 0; i < response.data.length; i++) {
        
        console.log("");
        console.log("***")
        console.log("    " +"Venue name: ")
        console.log( "      " + response.data[i].venue.name);
        console.log("    " +"Venue Location: ")
        console.log( "      " + response.data[i].venue.city + ", " + response.data[i].venue.country );
        console.log("    " +"Event Date: ")
        console.log( "      " + response.data[i].datetime);
        console.log("");
        
    }
  }
);

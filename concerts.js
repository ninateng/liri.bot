
//keys
require("dotenv").config();

//importing
var axios = require("axios");

module.exports = {

  //method to be exported
  concertInfo: function ( x ) {

    //declaring song name from parameter
    var artist = x;
    artist = artist.replace(" ","+")

    // We then run the request with axios module on a URL with a JSON
    axios
      .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + process.env.BIT_ID)
      .then( function( response ) {

        //forlooping through each concert event and printing info
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
      });
  }
}
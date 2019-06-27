
//keys
require("dotenv").config();

//importing
var axios = require("axios");

module.exports = {

  //method to be exported
  concertInfo: function ( x ) {

    console.log( "artist+" + x );

    //declaring song name from parameter
    var artist = x;
    artist = artist.replace(" ","+")
    artist = artist.replace("+","");
    artist = artist.replace(" ","+");

    console.log( "new artist " + artist);

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
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
}
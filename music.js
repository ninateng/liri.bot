
//keys
require("dotenv").config();
var keys = require("./keys.js");

//importing
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);



module.exports = {

  //method to be exported
  musicInfo: function ( x ) {

    //declaring song name from parameter
    var songName = x ;

    //if no song name then use this
    if ( songName === "") {
      songName = "The Sign"
    }
 
    //query search
    spotify.search({ type: 'track', query: songName }, function(err, data) {

      //error case
      if (err) {
        return console.log('Error occurred: ' + err);
      }

    
      var artists = [];
      //forloop to push artists into global array
      for ( var i = 0; i < data.tracks.items[0].artists.length; i++ ) {
        artists.push( data.tracks.items[0].artists[i].name )
      }

      //script in terminal
      console.log("");
      console.log( "Artists: ");
      console.log( "    " + artists );
      console.log("");
      console.log("Song title: ")
      console.log( "    " + data.tracks.items[0].name);
      console.log("");
      console.log("Preview Link: ");
      console.log( "    " + data.tracks.items[0].preview_url );
      console.log("");
      console.log("Album: ");
      console.log( "    " + data.tracks.items[0].album.album_type );
      console.log("");

    });
  }
}


require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var artists = [];

var songName = 'do you like bass';

if ( songName === "") {
    songName = "The Sign"
}
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
  for ( var i = 0; i < data.tracks.items[0].artists.length; i++ ) {
      artists.push( data.tracks.items[0].artists[i].name )
  }

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
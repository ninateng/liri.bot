# liri.bot

**LIRI BOT ?**
  This program works in your terminal. It will intake commands and variables and spit out some info!
  
 **How does it work ?**
  - open main "liri.js" in your terminal
  
  - download ..
      npm install init
      npm init for (JSON package)
      npm install axios 
      npm i node-spotify-api
      npm install
      
  - create a .env .. copy and paste inside file .. replace with YOUR keys
      # Spotify API keys

      SPOTIFY_ID=___your__key__no__spaces__
      SPOTIFY_SECRET=___your__key__no__spaces__

      movie ombd
      OMBD_ID=___your__key__no__spaces__

      bands in town 
      BIT_ID=___your__key__no__spaces__ (I recieved from my institution)
  
  - create a .gitinore .. copy and paste ..
      node_modules
      .DS_Store
      .env
  
  - if it isn't already .. open liri.js in your terminal .. right click liri.js and choose open in terminal
  
  - testing in terminal .. write ..
        node liri.js {command} {artist/or/movie title/or/song name}
        
        - options for commands
              concert-this
              movie-this
              spotify-this-song
              do-what-it-says .. however for this .. it currently works when you choose this command ..
                              .. it will run whatever commands that is inside the random.txt file ..
  
**What's Inside ?**
There are a total of 3 apis that utilized in this program

  - BandsInTown .. concert info .. information pulled using axios ..
  
  - OMBD .. movie info .. information pulled using axios ..
  
  - Spotify .. music info .. information pulled using npm package .. as seen in the download section above .. 
  
Each of the apis were built in different files, it makes the main file more clean and the sections of code easier to read and follow along.

Key tools I used in this project was:
  - Switch case
  - Process.argv
  - Importing files
  - Reading files
  - Retrieving information with axios and through npm package(s)
  - Exporting data
  - .gitignore
  - .env
  - the use of npm

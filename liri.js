require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);


var concertThis = function(concert) {
    console.log("concertThis")


}
var spotifythissong= function (song){
    console.log("spotifythissong")

}
var movieThis= function (movie){
    var url ="http://www.omdbapi.com/?apikey=trilogy&t="+movie
    console.log("movieThis")

}
var dowhatitsays= function(){
    console.log("do what it says")
}
var pick = function (command,data){
    switch (command) {
        case "concert-this":
            break;
        case "spotify-this-song":
             break;
        case "movie-this":
            break;
        case "do-what-it-says":
             break;
        default:
        console.log("unknown command")
    }
  console.log (command + "," + data);
}
var run = function(arg1,arg2) {
    pick (arg1,arg2)

  

}
run(process.argv[2], process.argv.slice(3).join(" "));
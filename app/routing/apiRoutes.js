// Dependencies
// =============================================================
var express = require("express");
//var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// =============================================================
// JSON Routes
// =============================================================

// Get all friends
app.get("/all/friends", function(req, res) {
    res.json(friends);
  });
  
  // Search for Specific Friend (or all friends) - provides JSON
app.get("/api/:friends?", function(req, res) {
    var selection = req.params.friends;
    if (selection) {
      console.log(selection);  
      for (var i = 0; i < friends.length; i++) {
        if (selection === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
});
  
  // Create New friend - takes in JSON input
  // creates a routname, then adds the input and adds it to the database
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase(); 
    console.log(newFriend);  
    friends.push(newFriend);
    res.json(newFriend);
});

module.exports(api.post, api.get);
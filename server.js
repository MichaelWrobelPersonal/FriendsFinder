
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Route References
// =============================================================
//var htmlRoute = require("./app/routing/htmlRoutes.js");
//var jsonRoute = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = app.port || 3000;

//load("./app/data/friends.js");
//app.dataBase.push( new dataBase );

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TBD Remove when we can access the methods in the file
app.get("/", function(req, res) {
  console.log("Reading... ", __dirname + "/app/public/home/html");
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  console.log("Reading... ", __dirname + "/app/public/html");
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// TBD remove when the API file is used

// Get all friends
app.get("/all/friends", function(req, res) {
    res.json(friends);
  });
  
  // Search for Specific Friend (or all friends) - provides JSON
app.get("/api/:friends?", function(req, res) {
    var chosen = req.params.friends;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
});
  
  // Create New friend - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);

    res.json(newFriend);
});

module.exports

// Tried these - get it to work
//app.use(express.static("./routing/htmlRoutes.js"));
//app.use(express.static(",/data"));

//load("./app/routing/htmlRoutes.html");
//load("./app/routing/apiRoutes.html");
//app.routes.push( new htmlRoute );
//app.routes.push( new jsonRoute );

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

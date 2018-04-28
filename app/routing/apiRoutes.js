module.exports = function(app, path, friends) {
//
// Dependencies
// =============================================================
//
// optionally can require the path seperatelly
// var path = require("path");
//
// =============================================================
//
// =============================================================
// JSON Routes
// =============================================================

  // Get all friends
  app.get("/all/friends", function(req, res) {
      console.log('looking for friends...');
      res.json(friends);
  });
  
// Get all friends
app.get("/best/friend", function(req, res) {
  console.log('looking for best friends...');
  res.json(bestFriend);
});

  // Search for Specific Friend (or all friends) - provides JSON
  app.get("/api/:friends?", function(req, res) {
    var selection = req.params.friends;
    if (selection) {
      console.log('Searching for ' + selection);  
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
    console.log('Hello ' + newFriend.name + ' welcome to the group!');  
    friends.push(newFriend);
    res.json(newFriend);
  });
}

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Route References
// =============================================================
var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route References
// =============================================================
// Sets up the external routes files
const htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app,path);
const apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app,path,friends);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

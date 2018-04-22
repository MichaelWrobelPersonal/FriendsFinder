// Dependencies
// =============================================================
var express = require("express");
//var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// =============================================================
// Page Routes
// =============================================================

app.get("/", function(req, res) {
    console.log("Reading... ", __dirname + "/app/public/home/html");
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    console.log("Reading... ", __dirname + "/app/public/html");
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

module.exports(app.get);
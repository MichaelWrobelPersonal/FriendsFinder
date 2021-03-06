module.exports = function(app, path) {
// Dependencies
// =============================================================
//
// Note: optionally can just require path instea of passing it in
//    var path = require("path");
// =============================================================

// =============================================================
// Page Routes
// =============================================================

    app.get("/", function(req, res) {
        console.log("Reading... ", __dirname + "/../public/home/html");
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        console.log("Reading... ", __dirname + "/../public/survey.html");
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/dialog", function(req, res) {
        console.log("Reading... ", __dirname + "/../public/dialog.html");
        res.sendFile(path.join(__dirname, "/../public/dialog.html"));
    });
}
//*************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
//*************************************************************************
// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {
    
// Each of the below routes just handles the HTML page that the user gets sent to.
    
// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
});

app.get("/categories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/categories.html"));    
});

app.get("/create_profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create_profile.html"));
});

};


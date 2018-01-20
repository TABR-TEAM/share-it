//*************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
//*************************************************************************
// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {
    
// Each of the below routes just handles the HTML page that the user gets sent to.
    
// index route loads home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home-page.html"));
});
// profile route loads profile page
app.get("/profile-home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-home.html"));
});
// categories route loads categories page
app.get("/categories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/categories.html"));    
});
//testing
app.get("/categories/:category", function(req, res) {
    console.log(req.params.category)
    res.sendFile(path.join(__dirname, "../public/categories.html"));    
});
//end testing
// create_profile route loads create_profile page
app.get("/create-profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create-profile.html"));
});

};


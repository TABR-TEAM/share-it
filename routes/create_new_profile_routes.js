
// api routes for displaying and saving data to // the db

// require models
var db = require("../models");

// routes
module.exports = function(app) {
    // GET route for getting all of the profiles
    var query = {};
    app.get("/api/profiles", function(req, res) {
        if(req.query.profile_id) {
            query.ProfileId = req.query.profile_id;
        }
        db.Post.findAll({
            where: query,
            include: [db.Profile]
        }).then(function(dbProfile) {
            res.json(dbProfile);
        });
    });
    // GET route for retrieving a single profile
    app.get("/api/profiles/:id", function(req, res) {
        db.Profile.findOne({
            where: {                
                id: req.params.id
            },
            include: [dbProfile]
        }).then(function(dbProfile) {
            res.json(dbProfile);
        });
    });
    // POST route for saving a new profile
    app.post("/api/profiles", function(req, res) {
        db.Profile.create(req.body).then(function(dbProfile) {
            var user = {
                id: dbProfile.dataValues.id,
                name: dbProfile.dataValues.name,
                email: dbProfile.dataValues.email,
                neighborhood: dbProfile.dataValues.neighborhood,
                city: dbProfile.dataValues.city
            }
            req.session.user = user
            req.session.user.loggedIn = true
            console.log(req.session)
            res.json(dbProfile);
        });
    });
    // DELETE route for deleting a profile
    app.delete("/api/profiles/:id", function(req, res) {
        db.Profile.destroy({
            where: {
            id: req.params.id
            }
        }).then(function(dbProfile) {
            res.json(dbProfile);
        });
    });
    // PUT route for updating a profile
    app.put("/api/profiles", function(req, res) {
        db.Profile.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbProfile) {
                res.json(dbProfile);
            });
    });
};
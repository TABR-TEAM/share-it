

var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the profiles
    app.get("/api/categories", function(req, res) {
        db.Categories.findAll({
            include: [db.Categories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.get("/api/categories/:itemsId", function(req, res) {
        // GET route for retrieving a single item
        db.Categories.findOne({
            where: {
                id: req.params.itemsId
            },
            include: [dbCategories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.post("/api/categories", function(req, res) {
        // POST route for saving a new item
        db.Categories.create(req.body).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.delete("/api/categories/:itemsId", function(req, res) {
        // DELETE route for deleting an item
        db.Categories.destroy({
            where: {
                id: req.params.itemsId
            }
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
}
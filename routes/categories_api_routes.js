

var db = require("../models");

module.exports = function(app) {
    app.get("/api/categories", function(req, res) {
        db.Categories.findAll({
            include: [db.Categories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.get("/api/categories/:id", function(req, res) {
        db.Categories.findOne({
            where: {
                id: req.params.id
            },
            include: [dbCategories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.post("/api/categories", function(req, res) {
        db.Categories.create(req.body).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    app.delete("/api/categories/:id", function(req, res) {
        db.Categories.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
}
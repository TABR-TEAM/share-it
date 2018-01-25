

var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the categories
    // app.get("/api/categories", function(req, res) {
    //     db.Items.findAll({}).then(function(dbCategories) {
    //         console.log(dbCategories)
    //         res.json(dbCategories);
    //     });
    // });
    app.get("/api/categorie/:userId", function(req, res) {
        db.Items.findAll({
            where: {
                ProfileId: req.params.userId
            }
        }).then(function(dbCategories) {
            console.log(dbCategories)
            res.json(dbCategories);
        });
    });

    // app.get("/api/categories", function(req, res) {
    //     db.Items.findAll({}).then(function(dbCategories) {
    //         console.log(dbCategories)
    //         res.json(dbCategories);
    //     });
    // });
    //this route may be of use
    // app.get("/api/categories/:items", function(req, res) {
    //     // GET route for retrieving a single item
    //     db.Items.findOne({
    //         where: {
    //             name: req.params.items
    //         },
    //         include: [dbCategories]
    //     }).then(function(dbCategories) {
    //         res.json(dbCategories);
    //     });
    // });

    //test
    app.get("/api/categories/:category", function(req, res) {
        // GET route for retrieving a single item

        console.log(req.params.category + " Hi from cat_api_routes")
        
       
        //you will want this for db calls
        db.Items.findAll({
            where: {
                category: req.params.category

            }
        }).then(function(dbCategories) {


            res.json(dbCategories);
        });

        //this will be psuedo data acting like a db hit for category spor)

    });
    //end of test route
    app.post("/api/categories", function(req, res) {
        db.Items.create(req.body).then(function(dbCategories) {
            console.log(dbCategories);
            res.json(dbCategories);
        });
    });
    app.delete("/api/categories/:items", function(req, res) {
        // DELETE route for deleting an item
        db.Items.destroy({
            where: {
                id: req.params.items
            }
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    })
}
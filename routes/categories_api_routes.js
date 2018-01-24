

var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the categories
    app.get("/api/categories", function(req, res) {
        db.Items.findAll({
            include: [db.Categories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    // this route may be of use
    app.get("/api/categories/:items", function(req, res) {
        // GET route for retrieving a single item
        db.Items.findOne({
            where: {
                name: req.params.items
            },
            include: [dbCategories]
        }).then(function(dbCategories) {
            res.json(dbCategories);
        });
    });
    //test
    app.get("/api/categories/:category", function(req, res) {
        // GET route for retrieving a single item

        console.log(req.params.category + " Hi from cat_api_routes")
        
       
        //you will want this for db calls
        db.Items.findAll({
            where: {
                category: req.params.category
            },
            include: [dbCategories]
        }).then(function(dbCategories) {


            res.json(dbCategories.dataValues);
        });

        //this will be psuedo data acting like a db hit for category sport
    //     res.json([{
    //         item_id: 1,
    //         item_name: "glove",
    //         category: "sport",
    //         item_description: "baseball glove for catching stuff",
    //         item_image: `../assets/images/placeholder-image.png`,

    //     },
    //     {
    //         item_id: 2,
    //         item_name: "ball",
    //         category: "sport",
    //         item_description: "baseball for throwing",
    //         item_image: `../assets/images/placeholder-image.png`,

    //     },
    //     {
    //         item_id: 3,
    //         item_name: "baseball bat",
    //         category: "sport",
    //         item_description: `baseball bat for hitting stuff`,
    //         item_image: `../assets/images/placeholder-image.png`,

    //     },
    //     {
    //         item_id: 4,
    //         item_name: "helmet",
    //         category: "sport",
    //         item_description: "baseball helmet for reduced ball damage",
    //         item_image: `../assets/images/placeholder-image.png`,

    //     }])
    });
    //end of test route
    app.post("/api/categories", function(req, res) {
        db.Items.create(req.body).then(function(dbCategories) {
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
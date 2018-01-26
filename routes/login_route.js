var db = require("../models");

module.exports = function (app) {
  app.post("/api/login", function(req, res){
    console.log(req.body);
    db.Profile.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (user) {
      if(!user === true && typeof user == "object"){
        console.log(user)
        res.json("check your email and password").status(404)
      }else{
        console.log(user)
        var formattedUser = {}
        formattedUser.name = user.dataValues.name;
        formattedUser.email = user.dataValues.email;
        formattedUser.neighborhood = user.dataValues.neighborhood;
        formattedUser.city = user.dataValues.city;
        formattedUser.id = user.dataValues.id;
        req.session.user = formattedUser;
        req.session.user.loggedIn = true;

        console.log(formattedUser, "this is formatted user")
  
        res.json(user);
      }
    });
  })
}
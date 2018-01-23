module.exports = function(app){
    app.get("/session", function (req, res) {
      console.log(req.session)
      res.json(req.session.user)
    })
  }
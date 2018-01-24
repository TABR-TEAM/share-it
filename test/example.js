var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:8080/create-profile")
  .type("#input-create-name", "Team TABR")
  .type('#input-create-email', "findTeamTABR@gmail.com")
  .type('#input-create-password', "SuperSecretTeamTABRPassword")
  .type('#input-create-neighborhood', "University of Utah")
  .type('#input-create-city', "Salt Lake City")
  
  .click(".btn")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });

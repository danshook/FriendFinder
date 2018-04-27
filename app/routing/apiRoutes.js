var data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(data);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
  });
};

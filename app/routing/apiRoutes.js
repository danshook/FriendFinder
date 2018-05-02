var data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(data);
  });

  app.post("/api/new", function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
    var userScores = newFriend.scores;
    var userData = req.body;
    var userScores = userData.scores;
    console.log("USER SCORES : " + userScores);
    console.log("NEW FRIEND : " + JSON.stringify(newFriend));
  });
};
//console.log("SCORES: " + userScores);
//console.log("REQ: " + JSON.stringify(req));

// for (var i = 0; i < data.length; i++) {
//   var diff = 0;
//   for (j = 0; j < data[i].scores[j]; j++) {
//     var currentFriendScore = data[i].scores[j];
//   };
//     var diff = Math.abs(
// math for user scores!
//   );
// }
// assign least diiference to bestMatch.
// if (diff <= bestMatch.pointDifference) {
// final comparison
// }
// console.log('BEST MATCH: ' + JSON.stringify(bestMatch));

//console.log("NEW FREIND: " + JSON.stringify(newFriend));
// res.end();

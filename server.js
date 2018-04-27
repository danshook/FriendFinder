// requiring modules
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

// initializing express app
var app = express();

// setting up port
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);

require("./app/routing/apiRoutes")(app);

// listening to port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

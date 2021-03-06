var express = require("express");
var bodyParser = require("body-parser")
var path = require("path")

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Listening on port "+PORT)
});
// ========================================
// Requirements
// ========================================
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	db = process.env.MONGODB_URI || "mongodb://localhost/weather_app",
	methodOverride = require("method-override"),
	mongoose = require("mongoose"),
	morgan = require("morgan"),
	port = process.env.PORT || 3000;


// ========================================
// Middleware
// ========================================
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));


// ========================================
// Database
// ========================================
mongoose.connect(db);


// ========================================
// Controller
// ========================================
var weatherController = require("./controllers/weather.js");
app.use("/weather", weatherController);


// ========================================
// Listen
// ========================================
app.listen(port);
console.log('========================================');
console.log("‎(ﾉಥ益ಥ）ﾉ﻿ ┻━┻");
console.log('========================================');




// ========================================
// Requirements
// ========================================
var express = require('express');
var router = express.Router();
var request = require("request");
var Weather = require("../models/weather.js");


// ========================================
// Index
// ========================================
router.get("/", function(req, res) {
	Weather.find().then(function(weather) {
		res.render("index.ejs", {weather});
	});
});


// ========================================
// New
// ========================================
router.get("/new", function(req, res) {
	res.render("new.ejs");
});


// ========================================
// Show
// ========================================
router.get("/:zip", function(req, res) {
	var zip = req.params.zip;
	// console.log(zip);
	// console.log(process.env.APIKEY);
	request("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + "&units=imperial" + "&appid=" + process.env.APIKEY, function (error, response, body) {
		var response_data;
		console.log(body);
    if (!error && response.statusCode == 200) {
      console.log('-----------------------------');
      console.log("Data here lol.");
      var weatherData = JSON.parse(body);
      console.log('-----------------------------');
      console.log(weatherData);
      // res.json(weatherData);
      res.render("show.ejs", {weatherData});
    };
	});
});


// ========================================
// Edit
// ========================================
router.get("/:zip/edit", function(req, res) {
	Weather.findbyId(req.params.id, function(err, weather) {
		if (err) {
			console.log(err);
		} else {
			console.log("Edit works lol.");
			res.render("edit.ejs", {weather});
		};
	});
});


// ========================================
// Update
// ========================================
router.put("/:zip", function(req, res) {
	Weather.findOneAndUpdate({
		_zip: req.params.id
	}, req.body, function(err, weather) {
		console.log(req.body);
	});
	res.redirect("/weather/" + req.params.id);
});


// ========================================
// Create
// ========================================
router.post("/", function(req, res) {
	console.log(req.body);
	var weather = new Weather(req.body);
	weather.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Create stuff lol.")
		};
		res.redirect("/weather");
	});
});

// ========================================
// Delete
// ========================================
router.delete("/:id", function(req, res) {
	Weather.findByIdAndRemove(req.params.id, function() {
		console.log("Delete stuff lol.")
		res.redirect("/weather");
	});
});




module.exports = router;

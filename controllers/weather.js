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
	res.render("index.ejs", )
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
	request("api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + "&APPID=" + process.env.APIKey, function (error, response, body) {
		var response_data;
    if (!error && response.statusCode == 200) {
      console.log('-----------------------------');
      console.log("Data here lol.");
      var weatherData = JSON.parse(body);
      console.log('-----------------------------');
      res.json(weatherData);
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
	weather.save(function(err, weather) {
		if (err) {
			throw err;
		} else {
			res.redirect("/weather");
		};
	});
});

// ========================================
// Delete
// ========================================
router.delete("/:id", function(req, res) {
	console.log(req.params.id);
	for (i = 0; i < Weather.length; i++) {
		if (Weather[i].id == req.params.id) {
			console.log("Weather[i]");
			Weather.splice(i, 1);
		};
	};
	res.redirect("/weather");
});




module.exports = router;

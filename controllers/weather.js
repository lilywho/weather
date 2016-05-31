// ========================================
// Requirements
// ========================================
var express = require('express');
var router = express.Router();
var request = require("request");


// ========================================
// Index
// ========================================
router.get("/:zip", function(req, res) {
	var zip = req.params.zip;
	request("api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + "&APPID=" + process.env.APIKey, function (error, response, body) {
		var response_data;
    if (!error && response.statusCode == 200) {
      console.log('-----------------------------');
      console.log('API data below...');
      var myData = JSON.parse(body);
      console.log('-----------------------------');
      res.json(myData);
    };
	});
});


// ========================================
// Show
// ========================================



// ========================================
// New
// ========================================



// ========================================
// Create
// ========================================



// ========================================
// Edit
// ========================================



// ========================================
// Update
// ========================================



// ========================================
// Delete
// ========================================





module.exports = router;

// ========================================
// Requirements
// ========================================
var mongoose = require("mongoose");


// ========================================
// Schema
// ========================================
var weatherSchema = new mongoose.Schema({
	zip: Number,
	// name: String,
	// temp: Number,
	// temp_min: Number,
	// temp_max: Number
	// sunrise: Number,
	// sunset: Number
});

var Weather = mongoose.model("Weather", weatherSchema);


module.exports = Weather;
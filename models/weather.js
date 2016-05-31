// ========================================
// Requirements
// ========================================
var mongoose = require("mongoose");


// ========================================
// Schema
// ========================================
var weatherSchema = new mongoose.Schema({
	zip: Number,
	name: String,
	main.temp: Number,
	main.temp_min: Number,
	main.temp_max: Number,
	// sys.sunrise: Number,
	// sys.sunset: Number
});

var Weather = mongoose.model("Weather", weatherSchema);


module.exports = Weather;
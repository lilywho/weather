// ========================================
// Requirements
// ========================================
var mongoose = require("mongoose");


// ========================================
// Schema
// ========================================
var weatherSchema = new mongoose.Schema({
	zip: Number,
});

var Weather = mongoose.model("Weather", weatherSchema);


module.exports = Weather;
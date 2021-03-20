const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  departs: {type: String, default: function() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  }}
});

module.exports = mongoose.model('Flight', flightSchema);

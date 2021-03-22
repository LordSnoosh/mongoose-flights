const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  departs: {type: String, default: function() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  }}
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);

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
  departs: {
    type: Date,
    default: 
    function() {
        Date.now() = current;
        const date = current.setFullYear(current.getFullYear() + 1);
        return date
    }
}
});


module.exports = mongoose.model('Flight', flightSchema);

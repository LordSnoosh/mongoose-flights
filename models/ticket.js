const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        required: true,
        unique: true, 
    },
    price: {
        type: Number,
        min: 0
    },
    flight: { 
        type: Schema.Types.ObjectId,
        ref: 'Flight' 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);
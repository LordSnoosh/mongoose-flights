const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
module.exports = {
    addToFlight
}
function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.ticket.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
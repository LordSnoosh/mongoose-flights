const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
module.exports = {
    addToFlight,
    show,
    create,
    update,
    delete: deleteTicket,
};

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.ticket.push(req.body.ticketId);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }
function show(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      res.render('/tickets/show', {title: 'Ticket Detail', ticket });
      
    })
    };

function create(req, res) {
Flight.findById(req.params.id, function(err, flight) {
    flight.ticket.push(req.body);
    flight.save(function(err) {
    res.redirect(`/flights/${flight._id}`);
    });
});
};
// function create(req, res) {
//     req.body.flight = req.params.id;
//     Ticket.create(req.body, function(err, ticket) {
//         res.redirect(`/tickets/${req.params.id}`);
//     }); 
// };

function update(req, res) {
    Ticket.findById(req.params.id, function(err, ticket){
        Object.assign(ticket, req.body);
        ticket.save(function(err) {
            // res.render()
            //or?
            res.redirect(`/tickets/${ticket.flight}`);
        });
    });
};

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err, deletedTicket) {
        res.redirect(`/flights/${deletedTicket.flight}`);
    });
};

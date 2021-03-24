// require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');

let f, flights;
let t, tickets;

Flight.find({}, (err, flightDocs) => flights = flightDocs);
Ticket.find({}, (err, ticketDocs) => tickets = ticketDocs);


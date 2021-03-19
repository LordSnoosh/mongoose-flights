const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
  };
  
  function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { flights });
    });
  }
  
  function create(req, res) {
   
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights/new');
    });
  }
  
  function newFlight(req, res) {
    res.render('flights/new');
  } 
const Flight = require('../models/flight');
module.exports = {
  new: newFlight,
  create,
  index,
  // index,
  // show,
  // create,
  // update,
  delete: deleteFlight
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
      if (err) console.log(err);
    
      res.render('flights/index', { flights});
  });
};

function newFlight(req, res) {
  const newFlight = new Flight();
const dt = newFlight.departs;
const departsDate = dt.toLocaleString();
res.render('flights/new', {departsDate});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, deletedFlight) {
      if (err) console.log(err);
      res.redirect('/flights');
  })
};



// function show(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//       if (err) console.log(err);
//       res.send(flight);
//   });
// };


  // Flight.create(req.body, function(err, flight) {
  //     if (err) console.log(err);
  //     res.render('/flights/new', {});
  // })
// };

// function update(req, res) {
//   Flight.findById(req.params.id, function(err, flights) {
//       if (err) console.log(err);
//       const updatedFlight = Object.assign(flight, req.body);
//       Flight.findByIdAndUpdate(req.params.id, updatedFlight, function(err, flght) {
//           res.redirect('/flights/${req.params.id}');
//       });
//   });
// };

// function deleteFlight(req, res) {
//   Flight.findByIdAndDelete(req.params.id, function(err, deletedFlight) {
//       if (err) console.log(err);
//       res.redirect('/flights');
//   })
// };

// module.exports = {
//     index,
//     new: newFlight,
//     create
//   };
  
//   function index(req, res) {
//     Flight.find({}, function(err, flights) {
//       res.render('flights/index', { flights });
//     });
//   }
  
//   function create(req, res) {
   
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//       if (err) return res.render('flights/new');
//       console.log(flight);
//       res.redirect('/flights/new');
//     });
//   }
  
  
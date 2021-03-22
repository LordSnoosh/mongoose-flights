const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index,
  delete: deleteFlight,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) console.log(err);
    res.render("flights/index", { flights });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  console.log(dt);
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  departsDate += `-${dt
    .getDate()
    .toString()
    .padStart(2, "0")}T${dt.toTimeString().slice(0, 5)}`;
  res.render("flights/new", { departsDate });
}

function create(req, res) {
  if (req.body.departs === "") delete req.body.departs;
  console.log(req.body);
  Flight.create(req.body, function (err, flight) {
    if (err) console.log(err);
    res.redirect(`/flights`);
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, deletedFlight) {
    if (err) console.log(err);
    res.redirect("/flights");
  });
}

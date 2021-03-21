const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
// router.get('/flights/:id', flightsCtrl.show)
// router.post('/', flightsCtrl.create);
// router.put('/flights/:id',flightsCtrl.update);
// router.delete('flights/:id', flightsCtrl.delete);

module.exports = router;
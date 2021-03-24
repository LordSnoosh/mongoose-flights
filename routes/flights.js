const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
/* GET /flights/new */
router.get('/new', flightsCtrl.new);
// POST/ flights
router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);

router.delete('/:id', flightsCtrl.delete);

module.exports = router;
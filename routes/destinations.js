const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /movies/:id/reviews  creating a review
router.post('/flights/:id/destinations', destinationsCtrl.create);
module.exports = router;
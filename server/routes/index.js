const router = require('express').Router();
const flightRoutes = require('./flight.routes');

router.use('/flights', flightRoutes);

module.exports = router;
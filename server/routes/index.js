const router = require('express').Router();
const flightRoutes = require('./flightRoutes');

router.use('/flights', flightRoutes);

module.exports = router;
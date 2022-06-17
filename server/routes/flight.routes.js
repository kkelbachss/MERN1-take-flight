const router = require('express').Router();
const { addFlight, findAllFlights } = require('../controllers/flight.controller');

router.get('/', async (req,res)=>{
    console.log('...getting flights...');
    const flights = await findAllFlights();
    res.json(flights);
})

router.post('/', async (req,res) => {
    try {
        console.log("...posting flight...");
        const flightId = await addFlight(req.body);
        res.json(flightId);
    } catch (err) {
        console.error(err);
    }
    
})


module.exports = router;
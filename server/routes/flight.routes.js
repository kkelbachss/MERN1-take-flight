const router = require('express').Router();
const { 
    addFlight, 
    findAllFlights, 
    getFlightById, 
    updateFlight, 
    deleteFlight,
    getFlightsByName
} = require('../controllers/flight.controller');

router.get('/', async (req,res)=>{
    try {
        console.log('...getting flights...');
        const flights = await findAllFlights();
        res.json(flights);
    } catch (err) {
        console.error(err);
    }
})

router.get('/check/:id', async (req,res)=>{
    try {
        console.log("...checking flight number "+req.params.id+"...");
        const flightsByName = await getFlightsByName(req.params.id)
        res.json(flightsByName);
    } catch (err) {
        console.error(err);
    }
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

router.get('/:id', async (req,res) => {
    try {
        console.log('...getting flight by id '+req.params.id+'...');
        const flight = await getFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        console.error(err);
    }
})

router.put('/:id', async(req,res) => {
    try {
        console.log('...finding '+req.body._id+' and updating...')
        // console.log(req.body._id);
        const newFlight = await updateFlight(req.body._id,req.body)
        res.json(newFlight);
    } catch (err) {
        console.error(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('...finding '+req.params.id+' and deleting...');
        const byeFlight = await deleteFlight(req.params.id);
        res.json(`Flight Number: ${req.params.id} deleted...`)
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;
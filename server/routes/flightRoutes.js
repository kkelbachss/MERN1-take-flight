const router = require('express').Router();

router.get('/', (req,res)=>{
    console.log('...getting flights...');
    res.send('These are my flights: ... ')
})


module.exports = router;
// import
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//PORT hidden in .env
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(require('./routes'));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('MongoDB connected.');
    })
    .catch(err=>{
        //displays error
        console.error(err);
        //terminates process
        process.exit(1);
    });

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}.`)
});
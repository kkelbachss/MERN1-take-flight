// import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
//PORT hidden in .env
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(()=>{
        console.log('MongoDB connected.');
    })
    .catch(err=>{
        //displays error
        console.error(err);
        //terminates process
        process.exit(1);
    }
);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}.`)
});
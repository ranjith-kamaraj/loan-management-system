const express = require('express');
const app = express();
const mongoose = require('mongoose');
const values = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/lmsProject',() =>{
    console.log('database connected')
});

app.use(express.json());
app.use('/api', values);


app.listen(3000, () => {
    console.log('server listening at 3000');
})
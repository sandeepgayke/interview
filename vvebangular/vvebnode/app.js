const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportjwt = require('passport-jwt');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const config = require('./config/database');
mongoose.connect(config.database);
mongoose.connection.on('connected' ,()=>{
    console.log('connected to database' +config.database);
});

const app = express(); 
const port = 2222;
   
app.use(cors());

app.use(express.static(path.join(__dirname , 'public')));
// const invoices  = require('./routes/invoices');
// const poitems = require('./routes/poitems');

// const vendors  = require('./routes/vendors');

const restaurants  = require('./routes/restaurants');

// const matdocs  = require('./routes/matdocs');

// const delschs  = require('./routes/delschs');

// const users  = require('./routes/users');
// const delcnfs  = require('./routes/delcnfs');
// const csvtojson  = require('./routes/converttojson');
// const auto  = require('./routes/autos');


app.use(bodyParser.json());

// app.use('/poitems',poitems);

// app.use('/vendors',vendors);

app.use('/restaurants',restaurants);

// app.use('/matdocs',matdocs);

// app.use('/delschs',delschs);

// app.use('/users',users);
// app.use('/invoices',invoices);
// app.use('/delcnfs',delcnfs);
// app.use('/csvtojson',csvtojson);
// app.use('/auto',auto);

app.get('/',(req,res)=>{
    res.send("Invalid endpoint");
});

app.listen(port , ()=>{
    console.log('server started on port' +port);
});

// const {StringStream} = require("scramjet");
// const csv = any;

// const csv=require('csvtojson')
// const request=require('request')

// var csvjson = require('csvjson');
// var fs = require('fs');
// app.get('/csvtojsonconverter',(req,res)=>{
//         var options = {
//             delimiter : '|' , 
//             quote     : '"' 
//         };


//     request.get('http://umasons.co.in/scp/data/vendor.csv')
//     .pipe(new StringStream())                                                    
//     .consume((object,err) => {
//         var assert = require("assert")
//         var result = csvjson.toObject(object, options);
//         Club.collection.insertMany(result, function(err,r) {
//                 //   assert.equal(null, err);
//                   //assert.equal(538, r.insertedCount);
//                 //  Club.close();
//             })  
    
    // })   



// });
const express = require('express');
//const mongoose = require('mongoose');
//let ejs = require ('ejs');
const app = express();
const router = require('./routes/cert');

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', router);


//mogodb
//mongoose.connect('mongodb://127.0.0.1:27017/cert',{useNewUrlParser: true});

//port
app.listen('3000',()=>console.log('express started'));
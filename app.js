const express = require('express');
const mongoose = require('mongoose');
//let ejs = require ('ejs');
const app = express();
const router = require('./routes/cert.js');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const cert = require("./models/cert.js");


//mogodb
mongoose.connect('mongodb://127.0.0.1:27017/cert');



app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
}));
 
app.use(passport.initialize());
app.use(passport.session());

 
passport.use(new LocalStrategy(cert.authenticate()));
passport.serializeUser(cert.serializeUser());
passport.deserializeUser(cert.deserializeUser());

//port
app.listen('3000',()=>console.log('express started'));
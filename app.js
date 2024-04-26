const express = require('express');
const mongoose = require('mongoose');
//let ejs = require ('ejs');
const app = express();
const router = require('./routes/cert.js');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const cert = require("./models/cert.js");





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

app.use(function(req,res,next){
  if(!req.session){
      return next(new Error('Oh no')) //handle error
  }
  next() //otherwise continue
  });

 
app.use(passport.initialize());
app.use(passport.session());

 
passport.use(new LocalStrategy(cert.authenticate()));
passport.serializeUser(cert.serializeUser());
passport.deserializeUser(cert.deserializeUser());

//port
app.listen( process.env.PORT || 3000, '0.0.0.0', () => {
  console.log("Server is running.");
});
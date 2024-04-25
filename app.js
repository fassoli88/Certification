const express = require('express');
const mongoose = require('mongoose');
//let ejs = require ('ejs');
const app = express();
const router = require('./routes/cert.js');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const cert = require("./models/cert.js");
const session = require('express-session');
const MemoryStore = require('memorystore')(session);



app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);

app.use(session({
cookie:{
    secure: true,
    maxAge:60000
       },
store: new RedisStore(),
secret: 'secret',
saveUninitialized: true,
resave: false
}));

app.use(function(req,res,next){
if(!req.session){
    return next(new Error('Oh no')) //handle error
}
next() //otherwise continue
});

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
app.listen(process.env.PORT || "5000", ()=>console.log('express started'));
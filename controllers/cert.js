const database = require('../models/cert');

module.exports = {
    home: (req, res)=>{
        res.render('home');
      },
    
    login: (req, res)=>{
        res.render('login');
      },
    signup: (req, res)=>{
        res.render('signup');
      },

    A: (req, res)=>{
      res.render('A+');
    }


}
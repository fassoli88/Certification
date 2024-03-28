const cert = require('../models/cert');

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
        res.render('A');
      },
    network: (req, res)=>{
      res.render('network');
    },
    ccna: (req, res)=>{
        res.render('ccna');
      },
    security: (req, res)=>{
        res.render('security');
      },  
        pentest: (req, res)=>{
          res.render('pentest');
      },
    ejpt: (req, res)=>{
        res.render('ejpt');
      },
    oscp: (req, res)=>{
        res.render('oscp');
      },
      //post req
    sign: (req, res)=>{
          const first = new cert({email: req.body.email, name: req.body.name, pass: req.body.pass});
          first.save().then(()=>console.log("a clint was added")),
          res.redirect('/login');
          
        }        
}
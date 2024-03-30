const cert = require('../models/cert');
const { search } = require('../routes/cert');

module.exports = {
    //get request
    home: (req, res)=>{
        res.render('home');
      },
    homel: (req, res)=>{
        res.render('homel');
      },
      
      login: (req, res)=>{
        res.render('login');
      },
      // post request
      log: (req, res)=>{
        
        //res.render('homel');
      },
      
      signup: (req, res)=>{
        res.render('signup');
      },
      /*
      //signup wrong
      signupr: (req, res)=>{
        res.redirect('signup');
      },*/
      // post request
      sign: (req, res)=>{
          const first = new cert({email: req.body.email, name: req.body.name, pass: req.body.pass});
          first.save().then(()=>console.log("a clint was added")),
          res.render('login');
          },       

      // get request
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
    test: (req, res)=>{
        res.render('test');
    }
}
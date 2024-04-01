const cert = require('../models/cert');


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
    log: async (req, res)=>{
        
      try {
        // check if the user exists
        const user = await cert.findOne({ name: req.body.name });
        //const mail = await cert.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.pass === user.pass;
          //const mresult = req.body.pass === mail.pass;
          if (result) {
            res.render("home");
          } else {
            res.status(400).json({ error: req.body.pass + "password doesn't match " + user.pass });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist " + user });
          res.render('signup');
        }
      } catch (error) {
        res.status(400).json({ error });
      }
      
      },
      
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect("/login");
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
      sign: async (req, res)=>{
      try{

        const first = new cert({
          name: req.body.name,
          email: req.body.email,
          pass: req.body.pass
        });
        first.save().then(()=>console.log("a clint was added"));

      }catch (error) {
        res.status(400).json({ error });
      }
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
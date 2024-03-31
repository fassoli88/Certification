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
        const mail = await cert.findOne({ email: req.body.email });
        if (user || mail) {
          //check if password matches
          const result = req.body.pass === user.pass;
          const mresult = req.body.pass === mail.pass;
          if (result || mresult) {
            res.render("home");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
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
          const first = await cert.create({
             name: req.body.name,
             email: req.body.email, 
             pass: req.body.pass});
          first.save().then(()=>console.log("a clint was added")),
          res.render('login');
          
          return res.status(200).json(cert);
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
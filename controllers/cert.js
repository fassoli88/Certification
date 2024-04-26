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

      logina: (req, res)=>{
        res.render('logina');
      },


      // post request
    log: async (req, res)=>{
        
      try {
        // check if the user exists
        const user = await cert.findOne({ username: req.body.username });

        //const mail = await cert.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.pass === user.pass;
          //const mresult = req.body.pass === mail.pass;
          if (result) {
            res.redirect("home");
          } else {
            res.status(400).json({ error: " password doesn't match " });
          }
        } else {
          res.status(400).json({ error: " User doesn't exist " });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
      
      },
      
    signup: (req, res)=>{
        res.render('signup');
     },

      // post request
      sign: async (req, res)=>{
      try{

        var first = new cert({
          username: req.body.username,
          email: req.body.email,
          pass: req.body.pass
        });
        
        first.save().then(()=>console.log("a clint was added"));
        res.redirect('login');

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
    },
    privacy: (req, res)=>{
      res.render('privacy');
  }
}
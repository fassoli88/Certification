const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//mogodb
mongoose.connect(process.env.MONGODB_URI);
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

var cert = new Schema({
    username: {
       type: String,
       requir: true
    },
    email: {
        type: String,
        requir: true
    },
    pass: {
        type: String,
        require: true
    }
});

cert.plugin(passportLocalMongoose);
module.exports = new mongoose.model('cert', cert);

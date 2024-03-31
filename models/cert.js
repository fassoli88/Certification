const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var cert = new Schema({
    name: {
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

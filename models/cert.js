const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    name: {
       type: String,
       requir: true
    },
    email: {
        type: String,
        requir: true
    },
    pass: {
        type:String,
        require: true
    }
});

module.exports = new mongoose.model('cert', schema);

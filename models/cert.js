const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    title: {
       type: String,
       requir: true
    }
});

module.exports = new mongoose.model('cert', schema);

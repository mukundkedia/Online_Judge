const mongoose = require('mongoose');

var Schema = mongoose.Schema;

//problem id auto increment manual

var problemSchema = new Schema({
    statement: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    // date_added :{ type : Date, default: Date.now }
});

module.exports =  mongoose.model('problemModel', problemSchema );
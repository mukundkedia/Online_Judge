const mongoose = require('mongoose');

var Schema = mongoose.Schema;

//problem id auto increment manual

var testcaseSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    sample_input_tc: {
        type: String,
        required: true
    },
    sample_output_tc: {
        type: String,
        required: true
    }
    ,
    date_added :{ type : Date, default: Date.now }
});

module.exports =  mongoose.model('testModel', problemSchema );
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

//foreign key to be added (user+problem id)

var submissionSchema = new Schema({
    language: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    verdict: {
        type: String,
        required: true
    },
    submittedAt: { type : Date, default: Date.now }
});

module.exports =  mongoose.model('submissionModel', submissionSchema );
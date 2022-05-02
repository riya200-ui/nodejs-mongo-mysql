const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Student',studentSchema)
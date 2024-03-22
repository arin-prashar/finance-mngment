const mongoose = require("mongoose");
const User = require('./user_model');

const trackerSchema=new mongoose.Schema({
    user:{
        type:User.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tracker_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true
    },
    expense:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
});

const Tracker = mongoose.model('Tracker', trackerSchema);
module.exports = Tracker;
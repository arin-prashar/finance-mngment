const mongoose = require("mongoose");
const User = require('./user_model');

const trackerSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    // tracker_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     trim:true
    // },
    expenseName:{type:String,
    required:true},
    
    expenseAmt:{
        type:Number,
        required:true,
      
    },
    description:{
        type:String,
        trim:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Tracker', trackerSchema);

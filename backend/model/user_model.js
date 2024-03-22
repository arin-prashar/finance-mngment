const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    user_id:{
        // auto assigned by mongodb
        type:String,
        required:true,
        // unique:true
    },
    username:{
        type:String,
        required:true,
        // unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
},{
    timestamps:true
});

module.exports=mongoose.model('User',UserSchema);
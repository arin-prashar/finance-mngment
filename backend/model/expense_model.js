const mongoose= require("mongoose");

const expenseSchema = new mongoose.Schema({
    amount_spent:{
        type:Number,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
});
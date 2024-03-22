const User=require('../model/user_model')
const secretKey=require('../middleware/authentication')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
exports.register= async (req,res,next)=>{
        const {username,email,password} =req.body;
const user=await User.create({username,email,password})


        let payload=  {id:user.username,password:user.password};
        const token=jwt.sign(payload,secretKey.secretKey)
        res.status(200).header("Authorization",token).send({token,user});
}
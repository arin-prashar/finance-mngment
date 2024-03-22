const User=require('../model/user_model')
const secretKey=require('../middleware/authentication')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')

const user_id_generator=()=>{
        return Math.random().toString(36).substr(2, 99);
        }
exports.register= async (req,res,next)=>{
        const user_id=user_id_generator();
        const {username,email,password} =req.body;
const user=await User.create({user_id,username,email,password})
        let payload=  {id:user.username,password:user.password};
        const token=jwt.sign(payload,secretKey.secretKey)
        res.status(200).header("Authorization",token).send({token,user});
};
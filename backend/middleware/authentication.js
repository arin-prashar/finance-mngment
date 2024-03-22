const jwt=require('jsonwebtoken')


const secretKey="Secret$$Key";
const authorization=(req,res,next)=>{
    
    let token=req.headers.authorization;
    if(!token){
       return res.status(401).json({message:"Access denied : token not passed"});
    }
try{

    token=token.split(' ')[1];
    const verifiedUser=jwt.verify(token,"Secret$$Key");

    if(!verifiedUser){
        return res.status(401).json({message:"Access denied"});
    }
req.user=verifiedUser;
next();
    

}
catch(err){
    res.send(err);
}
}




     
module.exports={secretKey,authorization};
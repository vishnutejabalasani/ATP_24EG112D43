
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()
const {verify} =  jwt
export const verifyToken=(...allowedRoles)=>{

    return (req, res, next)=>{
     try{
    //get token from cookie
   const token =  req.cookies?.token
   //check token exixted or not
   if(!token){
    return res.status(401).json({"message":"please login first"})
   }
   //validate token(decode the token)
   let decodedToken = verify(token,process.env.SECRET_KEY);
   //check the role is same as role in decoded token 
   if(!allowedRoles.includes(decodedToken.role)){
    return res.status(403).json({message:"You are not authorized"})
   }
    //add decoded token
    
   res.user= decodedToken;
   next()
}
catch(err){
    res.status(401).json({"message":"invalid user"})
}

    }
    }


// //export const verifyToken = async (req,res,next)=>{
// try{
//     //get token from cookie
//    const token =  req.cookies?.token
//    //check token exixted or not
//    if(!token){
//     return res.status(401).json({"message":"please login first"})
//    }
//    //validate token(decode the token)
//    let decodedToken = verify(token,process.env.SECRET_KEY);
//    //check the role is same as role in decoded token 
//    if(!allowedRoles.includes(decodedToken.role)){
//     return res.status(403).json({message:"You are not authorized"})
//    }
//     //add decoded token

//    res.user= decodedToken;
//    next()
// }
// catch(err){
//     res.status(401).json({"message":"invalid user"})
// }



// }
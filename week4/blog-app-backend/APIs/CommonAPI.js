import exp from 'express'
import { UserModel } from '../UserModel.js'
import { compare,hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { sign }=jwt
export const commonApp=exp.Router()

//Route for registration
commonApp.post("/users",async(req,res)=>{
    let allowedRoles=["USER","AUTHOR"]
    //get user from req
    const newUser=req.body
    //checck whether the rolw is permitted or not
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid response"})
    }
    //hash password and replace plain password with hash
    newUser.password= await hash(newUser.password,12)
    //create New user document
    const newUserDoc=new UserModel(newUser)
    //save document
    await newUserDoc.save()
    //send res
    res.status(201).json(({message:"User Created"}))
})

//Route for Login
commonApp.post("/login",async (req,res)=>{
    //roles allowed to Login
    //get user cred obj
    const {email,password}=req.body;
    //find user by email
    const user=await UserModel.findOne({email:email});
    //if user not found
    if(!user){
        return res.status(400).json({mesasage:"Invalid Email"})
    }
    //compare password
    const isMatched=await compare(password,user.password)
    //if passwords not matched
    if(!isMatched){
        return res.status(400).json({message:"Invalid password"})
    }
    //create jwt
    const signedToken=sign({id:user._id,email:email,role:user.role},
        process.env.SECRET_KEY,
        {expiresIn:"1h"}
    );
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSit:"lax",
    });
    //Remove password
    let userObj=user.toObject();
    delete user.password
    res.status(200).json({message:"Login Success",payload:userObj})  
})

//Route for Logout
commonApp.get("/logout", (req,res)=>{
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });
    //send message
    res.status(200).json({message:"Logout Success"})
})
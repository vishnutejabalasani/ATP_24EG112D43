import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import {userApp} from './APIs/UserAPI.js'
import {authorApp} from './APIs/AuthorAPI.js'
import {adminApp} from './APIs/AdminAPI.js'
import {commonApp} from './APIs/CommonAPI.js'
import cookieParser from "cookie-parser"
config()
//  create express app
const app = exp()

 //body parser middleware
app.use(exp.json())
app.use(cookieParser())
//pathlevel middleware
app.use("/user-api",userApp)
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp)
app.use("/auth",commonApp)


//connect to db

const connectDB =async() =>{}
//assign '
try{
    await connect(process.env.DB_URL);
    console.log("DB server connected")
    ///assign port
const port = process.env.port ||5000
app.listen(port,()=>console.log(`server listening on ${port}..`))


    await connect(process.env.DB_URL)
}
catch(err){
    console.log("err in db connect",err)
}

//to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path${req.url} is invalid`})
})
//to handle errors
app.use((err,req,res,next)=>{
     console.log(err.name)
     //validationError
     if(err.name === "ValidationError"){
        return res.status(400).json({message:"error occurred",err})
     }
     //cast error
     if(err.name==="CastError"){
        return res.status(400).json({message:"error occurred",error:"CastError"})
     }
     //send servee side error
     res.status(500).json({message:"error occurred",error:err.message})

   // res.json({message:"error occurred",error:err.message})
})

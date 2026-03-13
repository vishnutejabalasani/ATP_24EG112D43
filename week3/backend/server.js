//create http server
import exp from 'express'
const app = exp()  // express interally contains http server and many other
import {userApp} from"./APIs/UserAPI.js";
import { productApp } from './APIs/ProductAPI.js';

//use body parser middleware(in built middleware)
app.use(exp.json())

//create custom middleware - its a function
function middleware1(req,res,next){
    //send res from middleware
  //  res.json({message: "this resp is from middleware1 "})

  console.log("middleware1 executed")
 next()
}

function middleware2(req,res,next){
    //send res from middleware
  // res.json({message: "this resp is from middleware1 "})

  console.log("middleware2 executed")
 next()
}
//use middleware1
app.use(middleware1)
app.use(middleware2)


//forward req to userApi if path starts with /user-api
app.use('/user-api',userApp)
//forward req to productApi if path starts with /product-api
app.use('/product-api',productApp)
//set a port number
const port =3000

// used to assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}...`)) 



//post req and put req should send data to the api as body of the req obj
// get an ddel req do not support body of the req obj. so that these 2 req can send data through endpoint




//create http server
import exp from 'express'
const app = exp()  // express interally contains http server and many other

//use body parser middleware
app.use(exp.json())
//set a port number
const port =3000

// used to assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}...`)) 

//test data (in future replace this test data with database)
let users=[]

// create api ->it enables communication between servers

//create user REST API (REpresentional State Transfer)
//route to handle GET req of the client (http://localhost:3000/users) only nouns 
app.get('/users',(req,resp)=>{
    //send resp to client
    //read all users & send reesponse   
    resp.json({message:"all users",payload:users})
})

app.get ('/users/:id',(req,resp)=>{
    //get id of user from url parameter
let idOfUrl = Number(req.params.id) //{id :'5'}
    // find index of user
  //  let index = users.findIndex(userObj=>userObj.id===idOfUrl)
  let user =  users.find(userObj => userObj.id===idOfUrl)
    //if user not ffoound
    if(users===undefined){
        return resp.json({message:"User not found "})
    }
    //send resp
    resp.json({message:"user found",payload:user})
})

//route to handle POST req of client

app.post('/users',(req,resp)=>{
   //get new user from client
   const newUser = req.body
   //  then push user into users
    users.push(newUser) 
    //and send resp
   resp.json({message:"user created"})
})
//route to handle put req of client
app.put('/users',(req,resp)=>{
  // get modified user from client {}
  let modifiedUser =req.body;
  // get index of existing users in users array
  let index = users.findIndex(userObj=>userObj.id===modifiedUser.id)
  //if user not found
  if(index===-1){
    return resp.json({message:"User not found"})
  }
  // update user with index
  users.splice(index,1,modifiedUser)

  //send resp
  resp.json({message:"user updated"})


})

//route to handle delete req of client
app.delete('/users/:id',(req,resp)=>{
    //get id of user from url parameter
let idOfUrl = Number(req.params.id) //{id :'5'}
    // find index of user
    let index = users.findIndex(userObj=>userObj.id===idOfUrl)
    //if user not ffoound
    if(index===-1){
        return resp.json({message:"User not found to delete"})
    }

    //delete user by index
    users.splice(index,1)
    //send response
    resp.json({message:"user removed"})



})

//post req and put req should send data to the api as body of the req obj
// get an ddel req do not support body of the req obj. so that these 2 req can send data through endpoint



//create product api with below operations
//create new product ({productid,name,brand,price})
let products = []
app.get('/products',(req,resp)=>{
     
    resp.json({message:"all products",payload:products})
})


// read all products by brand
app.get ('/products/:brand',(req,resp)=>{
    //get brand  of product from url parameter
let StringOfUrl = String(req.params.brand) 
    
  let product =  products.filter(productObj => productObj.brand===StringOfUrl)
    //if product not ffoound
    if(product.length===0){
        return resp.json({message:"product not found "})
    }
    //send resp
    resp.json({message:"product found",payload:products})
})
// post
app.post('/products',(req,resp)=>{
   //get new product from client
   const newProduct = req.body
   //  then push product into products
    products.push(newProduct) 
    //and send resp
   resp.json({message:"Product created"})
})
//put
//Update a product
app.put('/products',(req,resp)=>{
  // get modified product from client {}
  let modifiedProduct =req.body;
  // get index of existing users in productss array
  let index = products.findIndex(productObj=>productObj.id===modifiedProduct.id)
  //if user not found
  if(index===-1){
    return resp.json({message:"Product not found"})
  }


//update a product
products.splice(index,1,updatedProduct)
resp.json({message:"Product updated"})
})



//delete a product by id
app.delete('/products/:id',(req,resp)=>{
    //get id of user from url parameter
let idOfUrl = Number(req.params.id) //{id :'5'}
    // find index of product
    let index = products.findIndex(productObj=>productObj.productId===idOfUrl)
    //if product not ffoound
    if(index===-1){
        return resp.json({message:"Product not found to delete"})
    }

    //delete user by index
    products.splice(index,1)
    //send response
    resp.json({message:"Product removed"})
})


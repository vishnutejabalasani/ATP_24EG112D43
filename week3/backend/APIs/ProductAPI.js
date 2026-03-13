
import exp from "express"
export const productApp =exp.Router()

//create product api with below operations
//create new product ({productid,name,brand,price})
let products = []
productApp.get('/products',(req,resp)=>{
    //send resp to client
    //read all users & send reesponse   
    resp.json({message:"all products",payload:products})
})


// read all products by brand
productApp.get ('/products/:brand',(req,resp)=>{
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
productApp.post('/products',(req,resp)=>{
   //get new user from client
   const newProduct = req.body
   //  then push user into users
    products.push(newProduct) 
    //and send resp
   resp.json({message:"Product created"})
})
//put
//Update a product
productApp.put('/products',(req,resp)=>{
  // get modified user from client {}
  let modifiedProduct =req.body;
  // get index of existing users in users array
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
productApp.delete('/products/:id',(req,resp)=>{
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


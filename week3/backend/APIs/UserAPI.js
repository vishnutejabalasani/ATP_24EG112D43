
// create mini-express application(separate route)
import exp from "express"
export const userApp =exp.Router()



//test data (in future replace this test data with database)
let users=[]

// create api ->it enables communication between servers

//create user REST API (REpresentional State Transfer)
//route to handle GET req of the client (http://localhost:3000/users) only nouns 
userApp.get('/users',(req,resp)=>{
    //send resp to client
    //read all users & send reesponse   
    resp.json({message:"all users",payload:users})
})

userApp.get ('/users/:id',(req,resp)=>{
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

userApp.post('/users',(req,resp)=>{
   //get new user from client
   const newUser = req.body
   //  then push user into users
    users.push(newUser) 
    //and send resp
   resp.json({message:"user created"})
})
//route to handle put req of client
userApp.put('/users',(req,resp)=>{
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
userApp.delete('/users/:id',(req,resp)=>{
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
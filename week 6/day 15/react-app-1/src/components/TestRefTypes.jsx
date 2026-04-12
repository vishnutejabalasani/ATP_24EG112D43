import { useState } from "react";

//state
const [user,setUser]=useState({username:"ravi",age:21,city:"hyd"})
const [marks,setMarks]=useState([10,20,30])

//update user state
const updateUser=()=>{
    setUser({...user,username:"bhanu",age:23});
}

//update marks
const updateMarks=()=>{
    setMarks=([40,...marks]);
}

<div className="text-center text-3xl">
    <p>Username:{user.username}</p>
    <p>Age:{user.age}</p>
    <p>City:{user.city}</p>
    <button className="bg-amber-500 p-4" onClick={updateUser}>Update User</button>
    {
        marks.map(mark=>user.marks)
    }
    <button className="bg-amber-400 p-4" onClick={updateMarks}>Update Marks</button>
</div>

export default TestRefTypes;
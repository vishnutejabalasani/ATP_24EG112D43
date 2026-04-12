import { useState,useEffect } from "react";

function APIDemo(){
    let [users,setUsers] = useState([])
    let[loading,setLoading]= useState(false)
    let[error,setError]= useState(null)
      
    useEffect(()=>{
        //a function to make api req
        async function getdata(){
            setLoading(true)
            try{
                let res = await fetch("https://jsonplaceholder.typicode.com/posts")
                let usersList = await res.json();
                //update state
                setUsers(usersList)
            }
            catch(err)
            {
                console.log("err is",err)
                setError(err)
            }
            finally{
               setLoading(false)
            }
        }
        getdata()
    },[])
    //deal with loading
    if(loading){
        return <p className="text-center text-5xl">Loading...</p>
    }
    //deal with errors
    if(error!=null)
    {
        return <p className="text-center text-red-500 text-5xl">{error.message}</p>
    }
    return(
        <div className="text-center mt=10">
            <h1 className="text-6xl text-blue-400">List of Users</h1>
            <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
               {users.map((userObj)=>(
                <div key={userObj.id}>
                    <p>{userObj.title}</p>
                    <p>{userObj.body}</p>
                    </div>
               )
            )}
            </div>
        </div>
    )
}
export default APIDemo;
import { useState } from "react";

function Counter(){
    //state
    const [count ,setCount]=useState(0);
    //functions to modify state
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div className="text-center p-10 border">
            <h1 className="text-3xl text-center">Count:{count}</h1>
            <button className="border-green-400 p-4" onClick={increment}>+</button>
            <button className="border-red-500 p-4" onClick={decrement}>-</button>
            <button className="border-amber-200 p-4" onClick={()=>resizeTo(0)}>Reset</button>
        </div>
    )
}

export default Counter;
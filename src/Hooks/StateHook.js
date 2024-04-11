import React, { useState } from "react";

function StateHook(){
    const [count,setCount]= useState(0)
    function incr(){
        setCount((prevState) => {
            return prevState + 1
        })
    }
    function decr(){
        setCount((prevState) => {
            return prevState  - 1
        })
    }
    return<div>
        <button onClick={incr}>incr func</button>
        <p>{count}</p>
        <button onClick={decr}>decr func</button>
    </div>
}
export default StateHook
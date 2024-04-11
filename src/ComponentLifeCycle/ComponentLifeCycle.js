import React, { useEffect, useState } from "react";
function ParentComponentLifeCycle(){
    const [show,setShow]=useState(false)
    const onClick = () => {
        setShow((prev) => !prev)
    }
    return<div>
        <button onClick={onClick}>{show ? "Hide Component" : "Show Component"}</button>
        {show ? <ComponentLifeCycle /> : null}
    </div>
}
function ComponentLifeCycle(){
    const [count,setCount] = useState(0)
    const [input,setInput] = useState("")

    useEffect(()=>
    {
         /**
         * This will run on mount
         * This will also run whenever any state changes occurs
         */
        console.log("useEffect without dependency array")
        return ()=>{
            console.log("comment unmounted")
        }})

    useEffect(()=>{
         /**
         * This will run on mount
         * This will not run whenever any state changes occurs
         * This will run only once throughout lifecycle of component
         */
         console.log("UseEffect called with empty dependency array.")
       
    },[])

    useEffect(()=>{
          /**
         * This will run on mount
         * This will not run whenever any state changes occurs for count
         */
        console.log("UseEffect called with count in dependency array.")
    },[input])

const onClick=()=>{
    setCount((prevcount)=>prevcount +1)
}
const onChange = (event) => {
    setInput(event.target.value)
}

    
return<>
    component life ComponentLifeCycle
    <h1>{count}</h1>
    <input value={input} onChange={onChange}/>
    <button onClick={onClick}>Incr</button>
    </>

}


export default ParentComponentLifeCycle
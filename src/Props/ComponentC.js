import React from "react";

function ComponentC(props){
return <div>
    
    <h2>In componentc {props.data}</h2>
    <form className="form">
        <input className="form-1" type="text" value={props.obj.name}  placeholder="enter your name" ></input>
        <input className="form-1"  type="email" value={props.obj.email} required placeholder="enter your email" ></input>
        <input className="form-1" type="number" value={props.obj.age} required placeholder="enter your age"></input>
        <input className="form-1" type="password" value={props.obj.password} required placeholder="enter your password"></input>
    </form>
    <p>{JSON.stringify(props.obj)}</p>
    
</div>
}
export default ComponentC
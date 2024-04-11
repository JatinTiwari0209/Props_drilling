import React from "react";
import ComponentB from "./ComponentB";


function ComponentA(){
    const detail={
        name:"john",
        email:"john@gmail.com",
        age:38,
        password:1233,
      
        
    }
return<div>
    <h2>In componentA</h2>
    <form>
        <input type="text" value={detail.name} required ></input>
        <input type="email" value={detail.email} required ></input>
        <input type="number" value={detail.age} required ></input>
        <input type="password" value={detail.password} required ></input>
    </form>
    <ComponentB d={detail} heading={"Heading"}/>
    
</div>
}
export default ComponentA
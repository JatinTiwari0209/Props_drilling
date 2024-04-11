import React from "react";
import ComponentC from "./ComponentC";
function ComponentB(props){
    console.log("props: ",props)
    return<div>
    <h2>In componentB {props.heading}</h2>
    <form>
        <input type="text" value={props.d.name} required ></input>
        <input type="email" value={props.d.email} required ></input>
        <input type="number" value={props.d.age} required ></input>
        <input type="password" value={props.d.password} required ></input>
    </form>
    <p>{JSON.stringify(props.d)}</p>
    <ComponentC obj={props.d} data={props.heading} />
</div>
}
export default ComponentB
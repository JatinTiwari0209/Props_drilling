import React from "react";

function First(){
    return <h1>First component rendered</h1>


}
function Second(){
    return <h1>Second component rendered</h1>

}

function ConditionalRendering(){
const showFirstComponent=false
return showFirstComponent?<First/>:<Second/>
}
export default ConditionalRendering
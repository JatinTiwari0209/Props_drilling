import React from "react";

function AnotherComponent(){
    return<div>
        <p>Another component</p>
    </div>
}
function SecondaryComponent(){
    return<div>
        <p>Secondary component</p>
    </div>
}

class Component extends React.Component{
    render(){
        return <div>
            <p>class Component</p>
        <p><b>hello world</b></p>
        <strong><u>this is strong tag</u></strong>
    </div>
}
}
// export default Component
export {
    Component,AnotherComponent,SecondaryComponent
}
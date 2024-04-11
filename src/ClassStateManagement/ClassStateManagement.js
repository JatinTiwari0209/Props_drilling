import React from "react";
class ClassStateMangement extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    incrCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrCount = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
      return<div>
        <button onClick={this.incrCount}>Incr</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrCount}>Decr</button>
      </div>
      
    }
}
export default ClassStateMangement
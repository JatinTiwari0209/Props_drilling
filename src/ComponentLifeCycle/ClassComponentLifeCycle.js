import React,{useEffect,useState} from "react"
class ComponentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            input:"",

        }
    }
    componentDidMount(){
        /**
         * This will run on mount
         * This will not run whenever any state changes occurs for count
         */
        console.log("Class component mounted...")
    }
    componentWillUnmount(){
         /**
         * This will get called when component unmounts
         */
         console.log("Class component unmounted...")
    }
    shouldComponentUpdate(nextProps,nextState){
         // console.log(nextProps, nextState, this.state)
        /**
         * This will run evertime whenver state changes occurs
         * Returning true will re-render the component
         * Returning false will not re-render the component
         */
        if (nextState.count !== this.state.count) {
            return true
        }
        return false


    }
    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value
        })

    }
    render() {
        return <>
        Component Life ComponentLifeCycle
        <h1>{this.state.count}</h1>
        <input value={this.state.input} onChange={this.onChange}/>
        <button onClick={this.onClick}>Incr</button>
        </>
        }
    }
    export default ComponentLifeCycle
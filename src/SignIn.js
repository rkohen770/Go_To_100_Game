//import { Component } from "react"
import React, { Component } from 'react';
class SignIn extends Component {
    state={
        name: ""
    }
    
    changed=(val)=>{
        this.setState({name: val});
    }
    bb=()=>{
        console.log("clicked");
        this.props.save(this.state.name)
    }
    render() { 
        return (
        <form>
            <label>Enter your name:
            <input type="text"
            onChange={(e) => this.changed(e.target.value)}
            />
            </label>
            <button onClick={this.bb}>save</button>
            <button onClick={this.props.start}>start the game</button>
      </form>
        );
    }
}
 
export default SignIn;
//handle the form...
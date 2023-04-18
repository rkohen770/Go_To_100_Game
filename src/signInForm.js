//import { Component } from "react"
import React, { Component } from 'react';
class SignIn extends Component {
    state={
        name: "enter username here"
    }
    cancel=()=>{
        this.setState({name: "enter username here"});
    }
    changed=(val)=>{
        this.setState({name: val});
    }
    render() { 
        return (
        <form>
            <label>Enter your name:
            <input type="text"
            onChange={(e) => this.changed(e.target.value)}
            />
            </label>
            <button onClick={()=>this.props.savePlayer(this.state.name)}>save</button>
            <button onClick={this.cancel}>cancel</button>
      </form>
        );
    }
}
 
export default SignIn;
//handle the form...
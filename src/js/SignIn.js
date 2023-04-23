//import { Component } from "react"
import React, { Component } from 'react';
import Person from './Person';
class SignIn extends Component {
  state={
      name: "",
      players: [],
      numPlayers: 0
  }
  
  changed=(val)=>{
      this.setState({name: val});
  }

  
  render=()=> { 
      //fix form
    
      return (
        <form onSubmit={()=>this.props.save(this.state.name)}>
          <label>Enter your name or type "ready" to start the game:
            <input type="text" onChange={(e) => this.changed(e.target.value)} />
          </label>
          <button type="submit">enter</button>
        </form>
      );
    }
}
 
export default SignIn;
//handle the form...
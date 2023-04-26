import React, { Component } from 'react';
import "../css/signin.css"
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
          <label >Enter your name:</label> 
          <input type="text" onChange={(e)=>this.changed(e.target.value)} />
          <button type="submit">enter</button>
        </form>
      );
    }
}
 
export default SignIn;
//handle the form...
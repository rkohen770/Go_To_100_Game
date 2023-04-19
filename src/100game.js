//import { Component } from "react"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import Board from "./Board";
import Person from "./Person";

class Game extends Component {
  state = {
    added: false,
    ready: false, 
    players: [],
    numPlayers: 0,
  };
  savePlayer = name => {
    this.setState({added: true});
    console.log(this.state.added);
    let pp = this.state.players;
    pp.push(new Person(name, this.state.numPlayers));
    let num = this.state.numPlayers++;
    this.setState({ players: pp, numPlayers: num });
  }
  startGame=()=>{
    this.setState({ready: true});
  }
  renderContent = () => {
    console.log("rendering");
    if (this.state.ready == true) {
      return <h1>{this.state.added}</h1>//should be true
    /*  return <div>
          {this.state.players.map(person=> <h1>person.id</h1>)
            
          }
      </div>*/
        
      //return <Board players={this.state.players} />;
    } else {
      return <SignIn save={this.savePlayer} start={this.startGame}/>;
    }
  }
 
  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

export default Game;
//handle the form...



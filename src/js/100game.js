//import { Component } from "react"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import Board from "./Board";
import Person from "./Person";

class Game extends Component {
  state = {
    ready: false,
    toAdd: true,
    players: [],
    numPlayers: 0,
  };
  savePlayer = name => {
      let pp = this.state.players;
      pp.push(new Person(name, this.state.numPlayers, Math.floor(Math.random() * 100) , 0, "you haven't won any games yet"));
      let num = this.state.numPlayers+1;
      this.setState({ toAdd: false, players: pp, numPlayers: num });
  }
  startGame=()=>{
    this.setState({ready: true});
  }
  addPlayer=()=>{
    this.setState({toAdd: true})
  }
  renderContent = () => {
      if (this.state.ready ==true) {
        return <Board players={this.state.players} />;
    } else{
      
        if(this.state.toAdd==true){
          return <SignIn save={this.savePlayer}/>;
        }
        else{
          return <div>
            <button onClick={this.addPlayer}>add a player</button>
            <button onClick={this.startGame}>start the game</button>
          </div>;
          
        }
      
    }  
  }
 
  render() {
    
    return <React.Fragment>
      {this.renderContent()}
      </React.Fragment>;
  }
}

export default Game;



//to do:
/*
one button presses for everybody --fix
turns!
styles
*/


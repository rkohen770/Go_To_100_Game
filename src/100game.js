//import { Component } from "react"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignInForm";
import Board from "../Board";

class Game extends Component {
  state = {
    ready: false,
    players: [],
    numPlayers: 0,
  };
  savePlayer = (name) => {
    let pp = this.state.players;
    pp.push({ name: name, id: this.state.numPlayer });
    let num = this.state.numPlayers++;
    this.setState({ players: pp, numPlayers: num });
  };
  renderContent = () => {
    if (this.state == true) {
      return <Board players={this.state.players} />;
    } else {
      return <SignIn save={this.savePlayer} />;
    }
  };
  render() {
    return <React.Fragment>{this.renderContent}</React.Fragment>;
  }
}

export default Game;
//handle the form...

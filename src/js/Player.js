//import { Component } from "react"
import React, { Component } from "react";
class Player extends Component {
  renderButtons = () => {
    if (this.props.number == 100) {
      return (
        <div>
          <button onClick={() => this.props.onAdd(this.props.id)}>+1</button>
          <button onClick={() => this.props.onSub(this.props.id)}>-1</button>
          <button onClick={() => this.props.onTimes(this.props.id)}>x2</button>
          <button onClick={() => this.props.onDiv(this.props.id)}>/2</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => this.props.onLeave(this.props.id)}>
            leave
          </button>
          <button onClick={() => this.props.onNewGame(this.props.id)}>
            new game
          </button>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.number}</p>
        <p>moves: {this.props.moves}</p>
        {this.renderButtons}
        <p>scores</p>
      </div>
    );
  }

  /*
    newGame=()=>{
        let score=this.state.moves;
        this.setState({number: 0});
        this.setState({moves: 0});
        if(this.state.scores=="you haven't won any games yet"){
            this.setState({scores: (this.state.moves).toString()});
        }
        else{
            this.setState({scores: this.state.scores+", "+score.toString()});
        }

    }*/
}
//inside the div put all the player's info
//h1 header is player's name
//number
//steps
//make functions...
//scores
export default Player;

//on a board there are players
//send enabled status in props, rerender every time?
//

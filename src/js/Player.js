//import { Component } from "react"
import React, { Component } from "react";
class Player extends Component {
  renderButtons = () => {
    if (this.props.number == 100) {
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
    } else {
      return (
        <div>
          <button onClick={() => this.props.onAdd(this.props.id)}>+1</button>
          <button onClick={() => this.props.onSub(this.props.id)}>-1</button>
          <button onClick={() => this.props.onTimes(this.props.id)}>x2</button>
          <button onClick={() => this.props.onDiv(this.props.id)}>/2</button>
        </div>
      );
    }
  };
  turn=()=>{
    if(this.props.turn==true){
      return "turn";
    }
    else{
      return "notTurn";
    }
  }
  render() {
    return (
      <div className={this.turn}>
        <h1>{this.props.name}</h1>
        <p>{this.props.number}</p>
        <p>moves: {this.props.moves}</p>
        {this.renderButtons()}
        <p>scores: {this.props.scores}</p>
      </div>
    );
  }


}

export default Player;



//import { Component } from "react"
import React, { Component } from "react";
import "../css/background.css";
import "../css/gamestyle.css";


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
          <button className="action"
            onClick={() => this.props.onAdd(this.props.id)}
            disabled={!this.props.turn}
          >
            +1
          </button>
          <button className="action"
            onClick={() => this.props.onSub(this.props.id)}
            disabled={!this.props.turn}
          >
            -1
          </button>
          <button className="action"
            onClick={() => this.props.onTimes(this.props.id)}
            disabled={!this.props.turn}
          >
            x2
          </button>
          <button className="action"
            onClick={() => this.props.onDiv(this.props.id)}
            disabled={!this.props.turn}
          >
            /2
          </button>
        </div>
      );
    }
  };
  turn = () => {
    if (this.props.turn == true) {
      return "turn";
    } else {
      return "notTurn";
    }
  };
  render() {
    return (
      <div  className={`player ${this.turn()}`}>
        <h2>{this.props.name}</h2>
        <p>{this.props.number}</p>
        <p>moves: {this.props.moves}</p>
        <div className="actions">{this.renderButtons()}</div>
        <p name="scores">scores:</p> 
        <p>{this.props.scores}</p>
      </div>
    );
  }
}

export default Player;

//import { Component } from "react"
import React, { Component } from 'react';
class player extends Component {

    state={
        number: this.props.number,
        moves: 0,
        scores: "you haven't won any games yet"
    };
    constructor(){
        super();
        this.renderButtons=this.renderButtons.bind(this);
    }
    renderButtons(){
        if(this.state.number==100){
            return <div>
            <button onClick={this.add1}>+1</button>
            <button onClick={this.sub1}>-1</button>
            <button onClick={this.times2}>x2</button>
            <button onClick={this.divide2}>/2</button>
            </div>
        }
        else{
            return <div>
            <button onClick="leave()">leave</button>
            <button onClick="newGame()">new game</button>
            </div>
        }
    }
    //how to make sure this is dynamic and constantly updates the rendering with the function based on 
    //what buttons they press?
    render() { 
        return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.state.number}</p>
            <p>moves: {this.state.moves}</p>
            {this.renderButtons()}
            <p>scores</p>
        </div>
        );
    }
    //figure out what to do here:
    leave(){
        
    }
    newGame(){

    }
    add1()
    {
        this.state.number++;
    }
    sub1()
    {
        this.state.number--;
    }
    times2()
    {
        this.state.number=this.state.number*2;
    }
    divide2()
    {
        this.state.number=this.state.number/2;
    }
}
 //inside the div put all the player's info
 //h1 header is player's name
 //number
 //steps
 //make functions...
 //scores
export default player;


//on a board there are players
//send enabled status in props, rerender every time?
//
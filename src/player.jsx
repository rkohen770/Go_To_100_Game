//import { Component } from "react"
import React, { Component } from 'react';
class player extends Component {

    state={
        number: this.props.number,
        moves: 0,
        scores: "you haven't won any games yet"
    };
    
    render() { 
        return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.state.number}</p>
            <p>moves: {this.state.moves}</p>
            <button onClick="add1()">+1</button>
            <button onClick="sub1()">-1</button>
            <button onClick="times2()">x2</button>
            <button onClick="divide2()">/2</button>
            <p>scores</p>
        </div>
        );
    }
    check(){
        this.state.moves++;
        if(this.state.number==100){
            //rerender with buttons leave/new game
            //function that will reset player.
        }
    }
    add1()
    {
        this.state.number++;
        check()
    }
    sub1()
    {
        this.state.number--;
        check()
    }
    times2()
    {
        this.state.number=this.state.number*2;
        check()
    }
    divide2()
    {
        this.state.number=this.state.number/2;
        check()
    }
}
 //inside the div put all the player's info
 //h1 header is player's name
 //number
 //steps
 //make functions...
 //scores
export default player;

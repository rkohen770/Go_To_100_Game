//import { Component } from "react"
import React, { Component } from 'react';
import player from "./player";

class board extends Component {
    state={
       people: this.props.players,//this.props? maybe only one thing being passed
       turn: this.props.players[0].id
    };
    isTurn=(id)=>{
        if(this.state.turn=id){
            return true;
        }
        else{
            return false;
        }
    }
    render() { 
     /*  1. send more info?
         2. switch "div" with some better way to set up the board and style-- see previous projects
         4. figure out how to know when to switch turns. can be something in player or here?
         5. not "product" what do you pass?
     */
    
        return (
           <div>
            {this.state.people.map(person=> <player 
            key={person.id} 
            id={person.id}
            name={person.name} 
            number={0}
            turn={this.isTurn(person.id)}//use this in player
            onLeave={this.leave}
            onNewGame={this.newGame}
            onAdd={this.add1}
            onSub={this.sub1}
            onTimes={this.times2}
            onDiv={this.divide2}
            
            />
                
          )}
           </div>

        );
    }
    leave=(pid)=>{
        let newpeople=this.state.people.filter(p=>p.id!=pid);
        this.setState({people: newpeople});
    }
    newGame=(pid)=>{
    let pp=this.state.people;
    let sc="";
    for(let i=0; i<pp.length; i++){
        if(pp[i].id==pid){
            if(pp[i].scores=="you haven't won any games yet"){
                sc=pp[i].moves.toString();
            }
            else{
                sc=pp[i].scores+", "+pp[i].moves.toString();
            }
            pp[i]={id: pp[i].id, name: pp[i].name, number: 0, moves: 0, scores: sc}};
       
    }
    this.setState({people: pp});
    }
    add1=(pid)=>//a lot of repitition... maybe refactor
    {
        let pp=this.state.people;
        for(let i=0; i<pp.length; i++){
            if(pp[i].id==pid){
                pp[i]={id: pp[i].id, name: pp[i].name, number: pp[i].number+1, moves: pp[i].moves++, scores: pp[i].scores}};
        
        }
        this.setState({people: pp});
        this.turn();
        
    }
    sub1=(pid)=>
    {
        let pp=this.state.people;
        for(let i=0; i<pp.length; i++){
            if(pp[i].id==pid){
                pp[i]={id: pp[i].id, name: pp[i].name, number: pp[i].number-1, moves: pp[i].moves++, scores: pp[i].scores}};
        
        }
        this.setState({people: pp});    
        this.turn();
    }
    times2=(pid)=>
    {
        let pp=this.state.people;
        for(let i=0; i<pp.length; i++){
            if(pp[i].id==pid){
                pp[i]={id: pp[i].id, name: pp[i].name, number: pp[i].number*2, moves: pp[i].moves++, scores: pp[i].scores}};
        
        }
        this.setState({people: pp});    
        this.turn();
    }
    divide2=(pid)=>
    {
        let pp=this.state.people;
        for(let i=0; i<pp.length; i++){
            if(pp[i].id==pid){
                pp[i]={id: pp[i].id, name: pp[i].name, number: pp[i].number/2, moves: pp[i].moves++, scores: pp[i].scores}};
        
        }
        this.setState({people: pp});    
        this.turn();
    }
    turn(){
        let t=this.state.turn;
        if(t==this.state.people.length-1){
            t=0;
        }
        else{
            t++;
        }
        this.setState({turn: t});
    }
}
//what component will the board be? contains everything else (instead of the div)
export default board;
//react.fragment in order to be able to play with the styles
//add connections between all the pages
//setting attributes in the video shows how to style



//TO DO: 
//       figure out how when and where to switch turns
//       make a "person" class?

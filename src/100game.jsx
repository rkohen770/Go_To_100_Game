//import { Component } from "react"
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import signIn from "./signInForm";
import board from "./board";


class game extends Component {

    state={
        ready: false,
        players: [],
        numPlayers: 0
    }
    savePlayer=(name)=>{
        let pp=this.state.players;
        pp.push({name: name, id: this.state.numPlayer});
        let num=this.state.numPlayers++;
        this.setState({players: pp, numPlayers: num})
    }
    renderContent=()=>{
        if(this.state==true){
            return <board players={this.state.players}/>
        }
        else{
            return <signIn
            save={this.savePlayer}/>
        }
    }
    render() { 
        return (
        <div>
            {this.renderContent}
        </div>
        );
    }
}
 
export default signIn;
//handle the form...
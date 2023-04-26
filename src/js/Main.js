import React, { Component } from 'react';
import Word from './Word';
import Game from './100game';
import "../css/background.css"
class Main extends Component {
    state = { 
        game: false,
        keyboard: false
     } 
    game=()=>{
        this.setState({game: true})
    }
    type=()=>{
        this.setState({keyboard: true})
    }
    render=()=>{
        if(this.state.game==false && this.state.keyboard==false){
            return <div>
                <button onClick={this.game}>play get to 100!</button>
                <button onClick={this.type}>use the keyboard</button>
            </div>;
        }
        if(this.state.game==true){
            return <Game/>;
        }
        if(this.state.keyboard==true){
            return <Word/>;
        }
    }
    render() { 
        return (
           <React.Fragment>
            {this.render()}
            </React.Fragment>
        );
    }
}
export default Main;
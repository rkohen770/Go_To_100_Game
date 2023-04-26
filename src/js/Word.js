import React, { Component } from 'react';
import KeyBoard from './KeyboardNew';
import TextArea from './TextArea';
import "../css/keyboard.css"
import "../css/key.css"
import "../css/colorButton.css"
import "../css/background.css"

class Word extends Component {
    state = { 
        text: "you cant type",
        capsLock: false,
        shift: false
     } 
    handleEnter = () => {
     let prevText=this.state.text+"/n";
     this.setState({text: prevText});
    };
    
    handleSpace = () => {
        let prevText=this.state.text+" ";
        this.setState({text: prevText});
    };

    handleDelete = () => {
        let prevText=this.state.text+" ";
        prevText = prevText.substring(0, prevText.length - 1);
        this.setState({text: prevText});
    };

    handleCapsLock = () => {
        let cap=!this.state.capsLock;
        this.setState({capsLock: cap});
    };

    handleShift = () => {
        let shft=!this.state.shift;
        this.setState({shift: shft});
    };

    handleKeyPress = (key) => {
        if(this.state.capsLock){
            if(this.state.shift){                                 
                let prevText=this.state.text+key;
                this.setState({text: prevText});
            }
            else{
                let prevText=this.state.text+key.toUpperCase();   
                this.setState({text: prevText});
            }
        }
        else{
            if(this.state.shift){
                let prevText=this.state.text+key.toUpperCase();   
                this.setState({text: prevText, shift: false});
            }
            else{
                let prevText=this.state.text+key;   
                this.setState({text: prevText, shift: false});
            }

        }
    };
    render() { 
        return (  
            <div>
                <TextArea text={this.state.text}/>
                <KeyBoard enter={this.handleEnter} space={this.handleSpace}
                delete={this.handleDelete} caps={this.handleCapsLock}
                shift={this.handleShift} press={this.handleKeyPress}/>
            </div> 
        );
    }
}
 
export default Word;
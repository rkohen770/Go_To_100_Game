import React, { Component } from 'react';
import KeyBoard from './KeyboardNew';
import TextArea from './TextArea';
import Colors from './Colors';
class Word extends Component {
    state = { 
        text: "",
        capsLock: false,
        shift: false,
        language: "en",
     } 
    handleEnter = () => {
     let prevText=this.state.text+"\n";
     this.setState({text: prevText});
    };
    
    handleSpace = () => {
        let prevText=this.state.text+" ";
        this.setState({text: prevText});
    };

    handleDelete = () => {
        let prevText=this.state.text;
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
    handleLanguageChange = (event) => {
        this.setState({language: event.target.value});
      };  
    switchColor=(color)=>{
        //how to change color?
    }
    render() { 
        return (  
            <div>
                <label >Language:</label>
                <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                </select>
                <Colors switchColor={this.switchColor}/>
                <TextArea text={this.state.text}/>
                <KeyBoard langauge={this.state.language} enter={this.handleEnter} space={this.handleSpace}
                delete={this.handleDelete} caps={this.handleCapsLock}
                shift={this.handleShift} press={this.handleKeyPress}/>
            </div> 
        );
    }
}
 
export default Word;


/*
TO DO:
1. fix the enter key
2. (add shift key?)
3. make the keys uppercase when CAPS is pressed
4. add all the other stuff


<label htmlFor="language">Language:</label>
                <select id="language" value={this.state.language} onChange={this.handleLanguageChange()}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                </select>






                /*import { useEffect } from "react";
import "../css/colorButton.css";

function ColorButton({ color, onClick,text,indexX,indexY }) {
    
  useEffect(() => {
    console.log("color changed");
  }, [color]);

  return (
    <button className="color-button {color}"
      style={{ backgroundColor: color }}
      onClick={() => onClick(text,indexX,indexY)}
    >
        {text}
    </button>
  );
}

export default ColorButton;*/


import React, { Component } from 'react';
import KeyBoard from './KeyboardNew';
import TextArea from './TextArea';
import Colors from './Colors';
import Editor from './Editor';
import "../css/keyboard.css"
import "../css/key.css"
import "../css/colorButton.css"
import "../css/background.css"

class Word extends Component {
    state = { 
        text: "",
        capsLock: false,
        language: "en",
        color: "#000000",
        underline: false,
        italic: false,
        bold: false
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

    

    handleKeyPress = (key) => {
        let prevText=this.state.text;
        if(this.state.capsLock){
            prevText+=key.toUpperCase();   
                                 
        }
        else{
            prevText+=key;
            
        }
        if(this.state.underline){

        }
        else{

        }
        if(this.state.italic){

        }
        else{

        }
        if(this.state.bold){

        }
        else{

        }
        this.setState({text: prevText});   
    }
       
    
    handleLanguageChange = (event) => {
        this.setState({language: event.target.value});
      };  
    switchColor=(color)=>{
        this.setState({color: color})
    }
    setUnderline=()=>{
        let und=!this.state.underline;
        this.setState({underline: und});
    }
    setItalic=()=>{
        let it=!this.state.italic;
        this.setState({italic: it});
    }
    setBold=()=>{
        let bold=!this.state.bold;
        this.setState({bold: bold});
    }
    render() { 
        return (  
            <div>
                
                <Colors switchColor={this.switchColor}/>
                <TextArea text={this.state.text}/>
                <KeyBoard language={this.state.language} enter={this.handleEnter} space={this.handleSpace}
                delete={this.handleDelete} caps={this.handleCapsLock}
                shift={this.handleShift} press={this.handleKeyPress}/>
                <label >Language:</label>
                <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                </select>
                <Editor underline={this.setUnderline} italic={this.setItalic} bold={this.setBold}/>
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


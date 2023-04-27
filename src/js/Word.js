import React, { Component } from 'react';
import KeyBoard from './KeyboardNew';
import TextArea from './TextArea';
import Colors from './Colors';
import Editor from './Editor';
import "../css/background.css"
import "../css/keyboard.css"
import "../css/key.css"
import "../css/colorButton.css"

class Word extends Component {
    state = { 
        text: ``,
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
        let letter=key;
        let added=false;
        if(this.state.capsLock){
            letter=letter.toUpperCase();  
        }
        if(this.state.italic){
            letter=letter.italics();
        }
        if(this.state.underline){
            if(this.state.bold){
                prevText=`${prevText}<b><u>${letter}</u></b>`;
            }
            else{
                prevText=`${prevText}<u>${letter}</u>`;
            }                   
        }
        else{
            if(this.state.bold){
                prevText=`${prevText}<b>${letter}</b>`;
            }
            else{
                prevText+=letter; 
            }            
        }   
        this.setState({text: prevText});   
    }
       
    
    handleLanguageChange = (event) => {
        this.setState({language: event.target.value});
      };  
    switchColor=(color)=>{
        this.setState({color: color})
    }
    handleUnderline=()=>{
        let und=!this.state.underline;
        this.setState({underline: und});
    }
    handleItalic=()=>{
        let it=!this.state.italic;
        this.setState({italic: it});
    }
    handleBold=()=>{
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
                press={this.handleKeyPress} isCaps={this.state.capsLock}/>
                <label >Language:</label>
                <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                </select>
                <Editor underline={this.handleUnderline} italic={this.handleItalic} bold={this.handleBold}/>
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


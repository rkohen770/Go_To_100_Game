import React, { Component } from "react";
import KeyBoard from "./KeyboardNew";
import TextArea from "./TextArea";
import Colors from "./Colors";
import Editor from "./Editor";
import "../css/background.css";
import "../css/keyboard.css";
import "../css/key.css";
import "../css/colorButton.css";

class Word extends Component {
  state = {
    text: ``,
    capsLock: false,
    language: "en",
    color: "black",
    italic: false,
    bold: false,
  };
  handleEnter = () => {
    let prevText = this.state.text + "\n";
    this.setState({ text: prevText });
  };

  handleSpace = () => {
    let prevText = this.state.text + " ";
    this.setState({ text: prevText });
  };

  handleDelete = () => {
    let prevText = this.state.text;
    prevText = prevText.substring(0, prevText.length - 1);
    this.setState({ text: prevText });
  };

  handleCapsLock = () => {
    let cap = !this.state.capsLock;
    this.setState({ capsLock: cap });
  };

  handleKeyPress = (key) => {
    let prevText = this.state.text;
    let letter = key;
    let added = false;
    if (this.state.capsLock) {
      letter = letter.toUpperCase();
    }
    if (this.state.italic) {
      letter = letter.italics();
    }
    if (this.state.bold) {
      letter = letter.bold();
    }
    prevText += letter;
    this.setState({ text: prevText });
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };
  switchColor = (col) => {
    this.setState({ color: col });
  };
  handleUnderline = () => {
    let und = !this.state.underline;
    this.setState({ underline: und });
  };
  handleItalic = () => {
    let it = !this.state.italic;
    this.setState({ italic: it });
  };
  handleBold = () => {
    let bold = !this.state.bold;
    this.setState({ bold: bold });
  };
  handleClear = () => {
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <div className="header">
          <TextArea text={this.state.text} color={this.state.color} />
          <div className="lang">
            <label>Language:</label>

            <select
              id="language"
              value={this.state.language}
              onChange={this.handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="he">Hebrew</option>
            </select>
          </div>
        </div>
        <div className="body">
          <KeyBoard
            language={this.state.language}
            enter={this.handleEnter}
            space={this.handleSpace}
            delete={this.handleDelete}
            caps={this.handleCapsLock}
            press={this.handleKeyPress}
            isCaps={this.state.capsLock}
          />
          <div>
            <Colors switchColor={this.switchColor} />
            <Editor
              clear={this.handleClear}
              italic={this.handleItalic}
              bold={this.handleBold}
              lan={this.state.language}
            />
          </div>
        </div>
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

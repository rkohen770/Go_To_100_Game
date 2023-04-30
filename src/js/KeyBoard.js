import React, { Component } from 'react';
import Key from './Key';
import "../css/keyboard.css";

class KeyBoard
 extends Component {
    state = { 
        englishKeys: [   ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
    [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "'"],
    ["caps lock","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
    [ "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?"],
    ["space"],
    ],
    hebrewKeys: [    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
        [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
        [ "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "[","]","\\", "'"],
        ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "enter"],
        ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ",".", "/","?"],
        ["space"],
    ]
    } 
    
    clicked=(key)=>{
        if (key === 'delete') this.props.delete();
        else if (key === 'enter') this.props.enter();
        else if (key === 'space') this.props.space();
        else if (key === 'caps lock') this.props.caps();
        else if (key === 'shift') this.props.shift();
        else this.props.press(key);
    }
    render() { 
      let lang;
      if(this.props.language=="en"){
        lang=this.state.englishKeys;
      }
      else{
        lang=this.state.hebrewKeys;
      }
        return (
          <div className="keyboard">
          {lang.map((row, index) => (
            <div className="row" key={index}>
              {row.map((k) => (
                  <Key key={k} letter={k} caps={this.props.isCaps} clickKey={this.clicked}/>

              ))}
            </div>
          ))}
        </div>   );
    }
}
 
export default KeyBoard;

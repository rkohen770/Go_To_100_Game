/*import React from "react";
import Key  from "./Key";
import "../css/keyboard.css";
import ColorButton from "./ColorButton";

import { useState,useEffect } from 'react';

function Keyboard() {
  const [text, setText] = useState('');
  const [isCaps, setIsCaps] = useState(false);
  const [language, setLanguage] = useState("en");


  const colors = {
    black: "#000000",
    red: "#ff0000",
    blue: "#0000ff",
    green: "#00ff00",
    yellow: "#ffff00",
    pink: "#ff00ff",
    purple: "#800080",
    orange: "#ffa500",
  };

  const handleEnter = () => {
    setText((prevText) => prevText + "\n");
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSpace = () => {
    setText((prevText) => prevText + ' ');
  };

  const handleDelete = () => {
    setText((prevText) => prevText.slice(0, prevText.length - 1));
  };

  const handleCapsLock = () => {
    setIsCaps((prevIsCaps) => !prevIsCaps);
  };

  const handleShift = () => {
    setText((prevText) => prevText.toLowerCase());
  };

  const handleKeyPress = (key) => {
    setText((prevText) => prevText + (isCaps ? key.toUpperCase() : key.toLowerCase()));
  };

  
  const englishKeys = [   ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
    [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "'"],
    ["caps lock","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
    [ "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?"],
    ["space"],
  ];
  const hebrewKeys = [    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
    [ "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "]", "[","]","\\", "'"],
    ["caps lock", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "enter"],
    ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ",".", "/","?"],
    ["space"],
  ];

   //select the keys to display based on the language
    const keys = language === "en" ? englishKeys : hebrewKeys;


  return (
    <div className="editor" >
    <div className="textContainer">{text}</div>
    <div className="container">
    <label htmlFor="language">Language:</label>
    <select id="language" value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="he">Hebrew</option>
    </select>
    <div className="color-picker">
      <ColorButton color={colors.red} />
      <ColorButton color={colors.blue} />
      <ColorButton color={colors.green} />
      <ColorButton color={colors.yellow} />
      <ColorButton color={colors.pink} />
      <ColorButton color={colors.purple} />
      <ColorButton color={colors.orange} />
      <ColorButton color={colors.black} />
    </div>
    <div className="keyboard">
      {englishKeys.map((row, index) => (
        <div className="row" key={index}>
          {row.map((key) => (
            <div
              className={`key ${key}`}
              key={key}
              onClick={() => {
                if (key === 'delete') handleDelete();
                else if (key === 'enter') handleEnter();
                else if (key === 'space') handleSpace();
                else if (key === 'caps lock') handleCapsLock();
                else if (key === 'shift') handleShift();
                else handleKeyPress(key);
              }}
            >
              {key === 'caps lock' && isCaps ?  "Caps Lock" : key}
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Keyboard;

*/








//import "./Keyboard.css";

// function Keyboard({ onKeyPress, shift=false,language }) {
//   const englishKeys = [
//     [
//       { id: "backquote", value: "`", display: "`", shiftDisplay: "~" },
//       { id: "digit1", value: "1", display: "1", shiftDisplay: "!" },
//       { id: "digit2", value: "2", display: "2", shiftDisplay: "@" },
//       { id: "digit3", value: "3", display: "3", shiftDisplay: "#" },
//       { id: "digit4", value: "4", display: "4", shiftDisplay: "$" },
//       { id: "digit5", value: "5", display: "5", shiftDisplay: "%" },
//       { id: "digit6", value: "6", display: "6", shiftDisplay: "^" },
//       { id: "digit7", value: "7", display: "7", shiftDisplay: "&" },
//       { id: "digit8", value: "8", display: "8", shiftDisplay: "*" },
//       { id: "digit9", value: "9", display: "9", shiftDisplay: "(" },
//       { id: "digit0", value: "0", display: "0", shiftDisplay: ")" },
//       { id: "minus", value: "-", display: "-", shiftDisplay: "_" },
//       { id: "equal", value: "=", display: "=", shiftDisplay: "+" },
//       { id: "backspace", value: "Backspace", display: "Backspace" },
//     ],
//     [
//       { id: "tab", value: "\t", display: "Tab" },
//       { id: "keyq", value: "q", display: "Q", shiftDisplay: "q" },
//       { id: "keyw", value: "w", display: "W", shiftDisplay: "w" },
//       { id: "keye", value: "e", display: "E", shiftDisplay: "e" },
//       { id: "keyr", value: "r", display: "R", shiftDisplay: "r" },
//       { id: "keyt", value: "t", display: "T", shiftDisplay: "t" },
//       { id: "keyy", value: "y", display: "Y", shiftDisplay: "y" },
//       { id: "keyu", value: "u", display: "U", shiftDisplay: "u" },
//       { id: "keyi", value: "i", display: "I", shiftDisplay: "i" },
//       { id: "keyo", value: "o", display: "O", shiftDisplay: "o" },
//       { id: "keyp", value: "p", display: "P", shiftDisplay: "p" },
//       { id: "leftbracket", value: "[", display: "[", shiftDisplay: "{" },
//       { id: "rightbracket", value: "]", display: "]", shiftDisplay: "}" },
//       { id: "backslash", value: "\\", display: "\\", shiftDisplay: "|" },
//     ],
//     [
//       { id: "capslock", value: "Caps Lock", display: "Caps Lock" },
//       { id: "keya", value: "a", display: "A", shiftDisplay: "A" },
//       { id: "keys", value: "s", display: "S", shiftDisplay: "S" },
//       { id: "keyd", value: "d", display: "D", shiftDisplay: "D" },
//       { id: "keyf", value: "f", display: "F", shiftDisplay: "F" },
//       { id: "keyg", value: "g", display: "G", shiftDisplay: "G" },
//       { id: "keyh", value: "h", display: "H", shiftDisplay: "H" },
//       { id: "keyj", value: "j", display: "J", shiftDisplay: "J" },
//       { id: "keyk", value: "k", display: "K", shiftDisplay: "K" },
//       { id: "keyl", value: "l", display: "L", shiftDisplay: "L" },
//       { id: "semicolon", value: ";", display: ";", shiftDisplay: ":" },
//       { id: "quote", value: "'", display: "'", shiftDisplay: '"' },
//       { id: "enter", value: "Enter", display: "Enter" },
//     ],
//     [
//       { id: "leftshift", value: "Shift", display: "Shift" },
//       { id: "keyz", value: "z", display: "Z", shiftDisplay: "Z" },
//       { id: "keyx", value: "x", display: "X", shiftDisplay: "X" },
//       { id: "keyc", value: "c", display: "C", shiftDisplay: "C" },
//       { id: "keyv", value: "v", display: "V", shiftDisplay: "V" },
//       { id: "keyb", value: "b", display: "B", shiftDisplay: "B" },
//       { id: "keyn", value: "n", display: "N", shiftDisplay: "N" },
//       { id: "keym", value: "m", display: "M", shiftDisplay: "M" },
//       { id: "comma", value: ",", display: ",", shiftDisplay: "<" },
//       { id: "period", value: ".", display: ".", shiftDisplay: ">" },
//       { id: "slash", value: "/", display: "/", shiftDisplay: "?" },
//       { id: "rightshift", value: "Shift", display: "Shift" },
//     ],
//     [
//       { id: "space", value: " ", display: "                      ", shiftDisplay: " " },
//     ],
//   ];

//   // hebrew keyboard
//   const hebrewKeys = [
//     [
//       { id: "digit1", value: "1", display: "1", shiftDisplay: "!" },
//       { id: "digit2", value: "2", display: "2", shiftDisplay: "@" },
//       { id: "digit3", value: "3", display: "3", shiftDisplay: "#" },
//       { id: "digit4", value: "4", display: "4", shiftDisplay: "$" },
//       { id: "digit5", value: "5", display: "5", shiftDisplay: "%" },
//       { id: "digit6", value: "6", display: "6", shiftDisplay: "^" },
//       { id: "digit7", value: "7", display: "7", shiftDisplay: "&" },
//       { id: "digit8", value: "8", display: "8", shiftDisplay: "*" },
//       { id: "digit9", value: "9", display: "9", shiftDisplay: "(" },
//       { id: "digit0", value: "0", display: "0", shiftDisplay: ")" },
//       { id: "minus", value: "-", display: "-", shiftDisplay: "_" },
//       { id: "equal", value: "=", display: "=", shiftDisplay: "+" },
//       { id: "backspace", value: "Backspace", display: "Backspace" },
//     ],
//     [
//       { id: "tab", value: "\t", display: "Tab" },
//       { id: "keyq", value: "/", display: "/", shiftDisplay: "Q" },
//       { id: "keyw", value: "'", display: "'", shiftDisplay: "W" },
//       { id: "keye", value: "ק", display: "ק", shiftDisplay: "E" },
//       { id: "keyr", value: "ר", display: "ר", shiftDisplay: "R" },
//       { id: "keyt", value: "א", display: "א", shiftDisplay: "T" },
//       { id: "keyy", value: "ט", display: "ט", shiftDisplay: "Y" },
//       { id: "keyu", value: "ו", display: "ו", shiftDisplay: "U" },
//       { id: "keyi", value: "ן", display: "ן", shiftDisplay: "I" },
//       { id: "keyo", value: "ם", display: "ם", shiftDisplay: "O" },
//       { id: "keyp", value: "פ", display: "פ", shiftDisplay: "P" },
//       { id: "bracketleft", value: "[", display: "[", shiftDisplay: "{" },
//       { id: "bracketright", value: "]", display: "]", shiftDisplay: "}" },
//       { id: "backslash", value: "\\", display: "\\", shiftDisplay: "|" },
//     ],
//     [
//       { id: "keya", value: "ש", display: "ש", shiftDisplay: "A" },
//       { id: "keys", value: "ד", display: "ד", shiftDisplay: "S" },
//       { id: "keyd", value: "ג", display: "ג", shiftDisplay: "D" },
//       { id: "keyf", value: "כ", display: "כ", shiftDisplay: "F" },
//       { id: "keyg", value: "ע", display: "ע", shiftDisplay: "G" },
//       { id: "keyh", value: "י", display: "י", shiftDisplay: "H" },
//       { id: "keyj", value: "ח", display: "ח", shiftDisplay: "J" },
//       { id: "keyk", value: "ל", display: "ל", shiftDisplay: "K" },
//       { id: "keyl", value: "ך", display: "ך", shiftDisplay: "L" },
//       { id: "semicolon", value: ";", display: ";", shiftDisplay: ":" },
//       { id: "quote", value: "'", display: "'", shiftDisplay: '"' },
//       { id: "enter", value: "\n", display: "Enter" },
//     ],
//     [
//       { id: "leftshift", value: "Shift", display: "Shift" },
//       { id: "keyz", value: "ז", display: "ז", shiftDisplay: "Z" },
//       { id: "keyx", value: "ס", display: "ס", shiftDisplay: "X" },
//       { id: "keyc", value: "ב", display: "ב", shiftDisplay: "C" },
//       { id: "keyv", value: "ה", display: "ה", shiftDisplay: "V" },
//       { id: "keyb", value: "נ", display: "נ", shiftDisplay: "B" },
//       { id: "keyn", value: "מ", display: "מ", shiftDisplay: "N" },
//       { id: "keym", value: "צ", display: "צ", shiftDisplay: "M" },
//       { id: "comma", value: ",", display: ",", shiftDisplay: "<" },
//       { id: "period", value: ".", display: ".", shiftDisplay: ">" },
//       { id: "slash", value: "/", display: "/", shiftDisplay: "?" },
//       { id: "rightshift", value: "Shift", display: "Shift" },
//     ],
//     [
//       { id: "space", value: " ", display: "                      " },
      
//     ],
//   ];

  
  
//   // when the language changes, the keyboard should be updated
  

//   const handleKeyPress = (key) => {
//     if (onKeyPress) {
//       onKeyPress(key);
//     }
//   };

//   //select the keys to display based on the language
//   const keys = language === "en" ? englishKeys : hebrewKeys;
//   return (
//     <div className="keyboard">
//       {keys.map((row, i) => (
//         <div key={i} className="row">
//           {row.map((key) => (
//             <button
//               key={key.id}
//               className={`key ${key.id}`}
//               onClick={() => handleKeyPress(key.value)}
//             >
//               <div className="key-value">{key.display}</div>
//               <span
//                 {...shift ? key.shiftDisplay || key.display : key.display}
//               ></span>
//             </button>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Keyboard;

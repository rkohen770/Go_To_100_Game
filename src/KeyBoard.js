import React from "react";
import Key  from "./Key";
//import "./Keyboard.css";

function Keyboard({ onKeyPress, shift=false }) {
  const keys = [
    [
      { id: "backquote", value: "`", display: "`", shiftDisplay: "~" },
      { id: "digit1", value: "1", display: "1", shiftDisplay: "!" },
      { id: "digit2", value: "2", display: "2", shiftDisplay: "@" },
      { id: "digit3", value: "3", display: "3", shiftDisplay: "#" },
      { id: "digit4", value: "4", display: "4", shiftDisplay: "$" },
      { id: "digit5", value: "5", display: "5", shiftDisplay: "%" },
      { id: "digit6", value: "6", display: "6", shiftDisplay: "^" },
      { id: "digit7", value: "7", display: "7", shiftDisplay: "&" },
      { id: "digit8", value: "8", display: "8", shiftDisplay: "*" },
      { id: "digit9", value: "9", display: "9", shiftDisplay: "(" },
      { id: "digit0", value: "0", display: "0", shiftDisplay: ")" },
      { id: "minus", value: "-", display: "-", shiftDisplay: "_" },
      { id: "equal", value: "=", display: "=", shiftDisplay: "+" },
      { id: "backspace", value: "Backspace", display: "Backspace" },
    ],
    [
      { id: "tab", value: "Tab", display: "Tab" },
      { id: "keyq", value: "q", display: "Q", shiftDisplay: "q" },
      { id: "keyw", value: "w", display: "W", shiftDisplay: "w" },
      { id: "keye", value: "e", display: "E", shiftDisplay: "e" },
      { id: "keyr", value: "r", display: "R", shiftDisplay: "r" },
      { id: "keyt", value: "t", display: "T", shiftDisplay: "t" },
      { id: "keyy", value: "y", display: "Y", shiftDisplay: "y" },
      { id: "keyu", value: "u", display: "U", shiftDisplay: "u" },
      { id: "keyi", value: "i", display: "I", shiftDisplay: "i" },
      { id: "keyo", value: "o", display: "O", shiftDisplay: "o" },
      { id: "keyp", value: "p", display: "P", shiftDisplay: "p" },
      { id: "leftbracket", value: "[", display: "[", shiftDisplay: "{" },
      { id: "rightbracket", value: "]", display: "]", shiftDisplay: "}" },
      { id: "backslash", value: "\\", display: "\\", shiftDisplay: "|" },
    ],
    [
      { id: "capslock", value: "Caps Lock", display: "Caps Lock" },
      { id: "keya", value: "a", display: "A", shiftDisplay: "A" },
      { id: "keys", value: "s", display: "S", shiftDisplay: "S" },
      { id: "keyd", value: "d", display: "D", shiftDisplay: "D" },
      { id: "keyf", value: "f", display: "F", shiftDisplay: "F" },
      { id: "keyg", value: "g", display: "G", shiftDisplay: "G" },
      { id: "keyh", value: "h", display: "H", shiftDisplay: "H" },
      { id: "keyj", value: "j", display: "J", shiftDisplay: "J" },
      { id: "keyk", value: "k", display: "K", shiftDisplay: "K" },
      { id: "keyl", value: "l", display: "L", shiftDisplay: "L" },
      { id: "semicolon", value: ";", display: ";", shiftDisplay: ":" },
      { id: "quote", value: "'", display: "'", shiftDisplay: '"' },
      { id: "enter", value: "Enter", display: "Enter" },
    ],
    [
      { id: "leftshift", value: "Shift", display: "Shift" },
      { id: "keyz", value: "z", display: "Z", shiftDisplay: "Z" },
      { id: "keyx", value: "x", display: "X", shiftDisplay: "X" },
      { id: "keyc", value: "c", display: "C", shiftDisplay: "C" },
      { id: "keyv", value: "v", display: "V", shiftDisplay: "V" },
      { id: "keyb", value: "b", display: "B", shiftDisplay: "B" },
      { id: "keyn", value: "n", display: "N", shiftDisplay: "N" },
      { id: "keym", value: "m", display: "M", shiftDisplay: "M" },
      { id: "comma", value: ",", display: ",", shiftDisplay: "<" },
      { id: "period", value: ".", display: ".", shiftDisplay: ">" },
      { id: "slash", value: "/", display: "/", shiftDisplay: "?" },
      { id: "rightshift", value: "Shift", display: "Shift" },
    ],
    [
      { id: "leftctrl", value: "Ctrl", display: "Ctrl" },
      { id: "leftalt", value: "Alt", display: "Alt" },
      { id: "space", value: " ", display: " ", shiftDisplay: " " },
      { id: "rightalt", value: "Alt", display: "Alt" },
      { id: "rightctrl", value: "Ctrl", display: "Ctrl" },
    ],
  ];

  const handleKeyPress = (key) => {
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div key={i} className="row">
          {row.map((key) => (
            <button
              key={key.id}
              className={`key ${key.id}`}
              onClick={() => handleKeyPress(key.value)}
            >
              <div className="key-value">{key.display}</div>
              <span
                {...shift ? key.shiftDisplay || key.display : key.display}
              ></span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

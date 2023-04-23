import React from "react";

import "../css/key.css";

function Key({ Key, onKeyPress, isCaps, isShift }) {
  const classList = ["key"];
  const handleClick = () => {
    if (Key === "delete") {
      onKeyPress("delete ");
      classList += "delete";
    } else if (Key === "enter") {
      onKeyPress("enter");
      classList += "enter";
    } else if (Key === "caps lock") {
      isCaps ? (classList += "active") : (classList -= "active");
      onKeyPress("caps lock");
      classList += "caps lock";
    } else if (Key === "shift") {
      isShift ? (classList += "active") : (classList -= "active");
      onKeyPress("shift");
      classList += "shift";
    } else if (Key === "space") {
      onKeyPress("\n");
      classList += "space";
    } else {
      if (isCaps) {
        Key = Key.toUpperCase();
      }
      onKeyPress(Key);
    }
  };

  return (
    <div className={classList} onClick={handleClick}>
      {onKeyPress(Key)}
    </div>
  );
}

export default Key;

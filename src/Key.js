import React from "react";

function Key({ id, display, value, onPress }) {
  const handleClick = () => {
    onPress(value);
  };

  return (
    <div className={`key ${id}`} onClick={handleClick}>
      {display}
    </div>
  );
}

export default Key;

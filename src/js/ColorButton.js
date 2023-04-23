import { useEffect } from "react";
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

export default ColorButton;
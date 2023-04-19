// change color of the button
import "draft-js/dist/Draft.css";

import ReactQuill from "react-quill";
import { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";

function ColorBtn({color,onClick}) {

    const handleClick = () => {
        onClick(color);
    };
    return (
        <div className='colorBtn' style={{backgroundColor: color , border: '1px solid ', borderRadius: '30%', width: '70px', height: '30px', margin: '5px', cursor: 'pointer', textAlign: 'center', lineHeight: '30px', color: 'white'}}>
            {color}
        </div>
    );


}

export default ColorBtn;


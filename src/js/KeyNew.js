import React, { Component } from 'react';

import "../css/keyboard.css";

class Key extends Component {
    state = {  } 
    render() { 
        let classList ="key ";
        {this.props.letter==="space"? classList+= "space ":classList+= "letter ";}
        return (
            <button className={classList} onClick={()=>this.props.clickKey(this.props.letter)}>{this.props.letter}</button>
        );
    }
}
 
export default Key;
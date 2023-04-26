import React, { Component } from 'react';
import "../css/keyboard.css";

class Key extends Component {
    state = {  } 
    render() { 
        return (
            <button className='key' onClick={()=>this.props.clickKey(this.props.letter)}>{this.props.letter}</button>
        );
    }
}
 
export default Key;
import React, { Component } from 'react';

import "../css/keyboard.css";

class Key extends Component {
    state = {  } 
    IsCaps=()=>{
        if(this.props.caps){
          return  <button className='key' onClick={()=>this.props.clickKey(this.props.letter)}>{this.props.letter.toUpperCase()}</button>
            
        }
        return  <button className='key' onClick={()=>this.props.clickKey(this.props.letter)}>{this.props.letter}</button>
    }
    render() { 
        let classList ="key ";
        {this.props.letter==="space"? classList+= "space ":classList+= "letter ";}
        return (
            <div className={classList}>{this.IsCaps()}</div>
            
        );
    }
}
 
export default Key;
import React, { Component } from 'react';
class Key extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={()=>this.props.clickKey(this.props.key)}>{this.props.key}</button>
        );
    }
}
 
export default Key;
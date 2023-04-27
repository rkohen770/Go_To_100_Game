import React, { Component } from 'react';
class TextArea extends Component {
    
    render() { 
        return (
            <pre dangerouslySetInnerHTML={{__html: this.props.text}} />
        );
    }
}
 
export default TextArea;
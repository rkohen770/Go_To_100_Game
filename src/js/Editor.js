import React, { Component } from 'react';
class Editor extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button onClick={this.props.underline}>U</button>
                <button onClick={this.props.italic}>I</button>
                <button onClick={this.props.bold}>B</button>
            </div>
        );
    }
}
 
export default Editor;

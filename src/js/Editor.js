import React, { Component } from 'react';
class Editor extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button onclick={this.props.underline}>U</button>
                <button onclick={this.props.italic}>I</button>
                <button onclick={this.props.bold}>B</button>
            </div>
        );
    }
}
 
export default Editor;

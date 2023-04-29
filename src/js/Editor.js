import React, { Component } from 'react';
class Editor extends Component {
    isEn=()=>{
        if(this.props.lan=="en"){
            return <div>
            <button onClick={this.props.italic}>I</button>
            <button onClick={this.props.bold}>B</button>
            <button onClick={this.props.clear}>clear</button>
        </div>
        }
        else{
            return <button onClick={this.props.clear}>clear</button>
        }
    }
    render() { 
        return (
            <div>
                {this.isEn()}
            </div>
        );
    }
}
 
export default Editor;

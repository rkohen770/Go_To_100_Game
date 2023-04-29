import React, { Component } from 'react';
class TextArea extends Component {
    /*black: "#000000",
            red: "#ff0000",
            blue: "#0000ff",
            green: "#00ff00",
            yellow: "#ffff00",
            pink: "#ff00ff",
            purple: "#800080",
            orange: "#ffa500", */
    setCol=()=>{
        
        if(this.props.color=='black'){
            return <pre style={{ color: 'black'} } dangerouslySetInnerHTML={{__html: this.props.text}} />
        }
        if(this.props.color=='red'){
            return <pre style={{ color: 'red'} } dangerouslySetInnerHTML={{__html: this.props.text}} />
        }
        if(this.props.color=='blue'){
            return <pre style={{ color: 'blue'} } dangerouslySetInnerHTML={{__html: this.props.text}} />
        }
        if(this.props.color=='green'){
            return <pre style={{ color: 'green'} } dangerouslySetInnerHTML={{__html: this.props.text}} />
        }
        if(this.props.color=='yellow'){
            return <pre style={{ color: 'yellow'} } dangerouslySetInnerHTML={{__html: this.props.text}} />
        }
    }
    render() { 
        return (
           <div>
            {this.setCol()}
           </div>
        );
    }
}
 
export default TextArea;
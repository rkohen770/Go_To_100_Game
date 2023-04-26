import React, { Component } from 'react';
class Colors extends Component {
    state = { 
        colors : {
            black: "#000000",
            red: "#ff0000",
            blue: "#0000ff",
            green: "#00ff00",
            yellow: "#ffff00",
            pink: "#ff00ff",
            purple: "#800080",
            orange: "#ffa500",
          }
     } 
    render() { 
        return (
            <div className="color-picker">
                    <button style={{ backgroundColor: this.state.colors.black }} onClick={()=>this.props.switchColor(this.state.black)}/>
                    <button style={{ backgroundColor: this.state.colors.red }} onClick={()=>this.props.switchColor(this.state.red)} />
                    <button style={{ backgroundColor: this.state.colors.blue }} onClick={()=>this.props.switchColor(this.state.black)}/>
                    <button style={{ backgroundColor: this.state.colors.green }} onClick={()=>this.props.switchColor(this.state.green)}/>
                    <button style={{ backgroundColor: this.state.colors.yellow }} onClick={()=>this.props.switchColor(this.state.yellow)}/>
                    <button style={{ backgroundColor: this.state.colors.pink }} onClick={()=>this.props.switchColor(this.state.pink)}/>
                    <button style={{ backgroundColor: this.state.colors.purple }} onClick={()=>this.props.switchColor(this.state.purple)}/>
                    <button style={{ backgroundColor: this.state.colors.orange }} onClick={()=>this.props.switchColor(this.state.orange)}/>
                </div>
        );
    }
}
 
export default Colors;
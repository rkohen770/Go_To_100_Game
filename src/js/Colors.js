import React, { Component } from 'react';
import "../css/colorButton.css"
class Colors extends Component {
    
    render() { 
        return (
            <div className="color-picker">
                    <button style={{ backgroundColor: 'black' }} onClick={()=>this.props.switchColor("black")}/>
                    <button style={{ backgroundColor: 'red' }} onClick={()=>this.props.switchColor("red")} />
                    <button style={{ backgroundColor: 'blue' }} onClick={()=>this.props.switchColor("blue")}/>
                    <button style={{ backgroundColor: 'green' }} onClick={()=>this.props.switchColor("green")}/>
                    <button style={{ backgroundColor: 'yellow' }} onClick={()=>this.props.switchColor("yellow")}/>
                </div>
        );
    }
}
 
export default Colors;
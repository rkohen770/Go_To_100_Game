import React, { Component } from 'react';
import "../css/colorButton.css"
class Colors extends Component {
    
    render() { 
        return (
            <div className="color-picker">
                    <button className='color' style={{ backgroundColor: 'black' }} onClick={()=>this.props.switchColor("black")}/>
                    <button className='color' style={{ backgroundColor: 'red' }} onClick={()=>this.props.switchColor("red")} />
                    <button className='color' style={{ backgroundColor: 'blue' }} onClick={()=>this.props.switchColor("blue")}/>
                    <button className='color' style={{ backgroundColor: 'green' }} onClick={()=>this.props.switchColor("green")}/>
                    <button className='color' style={{ backgroundColor: 'yellow' }} onClick={()=>this.props.switchColor("yellow")}/>
                </div>
        );
    }
}
 
export default Colors;
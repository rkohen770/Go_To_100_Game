//import { Component } from "react"
import React, { Component } from 'react';
class board extends Component {

    render() { 
        let people=this.props.players;//this.props? maybe only one thing being passed
        for (var i = 0; i < people.length; i ++) {
            children.push(<ChildComponent key={i} number={i} />);
            
          };
          let enabled="badge m-2 badge-";
          enabled+= this.turn()==true? "primary": "warning";
          for (var i = 0; i < people.length; i ++) {
            children[i].className={}//continue here i got stuck
            
          };
        return (
            <ParentComponent>
            {children}
          </ParentComponent>

        );
    }

/*
        const children = [];
        
        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<ChildComponent key={i} number={i} />);
        };
        
        return (
          <ParentComponent addChild={this.onAddChild}>
            {children}
          </ParentComponent>
        );
      }
*/
    turn(id){

        //maybe have some array of players saved and enable/disable from the css
        //keep doing this in a loop somehow
    }
}
//what component will the board be? contains everything else (instead of the div)
//inside will be a list of players, buttons...
export default board;
//react.fragment in order to be able to play with the styles
//maybe just do this in the homepage instead?
//add connections between all the pages
//setting attributes in the video shows how to style
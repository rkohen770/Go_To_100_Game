//import { Component } from "react"
import React, { Component } from 'react';
class board extends Component {

    render() { 
        let people=this.props.players;//this.props? maybe only one thing being passed
     /*  1. send all info needed in player
         2. switch "div" with some better way to set up the board and style-- see previous projects
         3. you need to RENDER player, not set it in a div, figure out how that works
     */
    
        return (
           <div>
            {people.map(person=> <player />)}
           </div>

        );
    }


    turn(id){

        //maybe have some array of players saved and enable/disable from the css
        //keep doing this in a loop somehow
    }
}
//what component will the board be? contains everything else (instead of the div)
//inside will be a list of players, buttons... (buttons in every player?)
export default board;
//react.fragment in order to be able to play with the styles
//maybe just do this in the homepage instead?
//add connections between all the pages
//setting attributes in the video shows how to style
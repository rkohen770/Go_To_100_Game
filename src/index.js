import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

//const element = <h1>this will be the home page</h1>;
//ReactDOM.render(element, document.getElementById("root"));

//get to 100 game
import game from "./100game";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<game />);

//this will be the home page, and from here you can go to the text editor or get to 100 game

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

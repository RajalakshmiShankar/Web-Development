import React from "react";
import ReactDOM from "react-dom";
const name1 = "Rajalakshmi";
const name2 = "Shankar";
const num = "5";
ReactDOM.render(
  <div>
    <h1>Hello {name1 + " " + name2}</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

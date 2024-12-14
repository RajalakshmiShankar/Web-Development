import React from "react";
import ReactDOM from "react-dom";
const name = "RAJALAKSHMI SHANKAR";
const currentdate = new Date();
const Year = currentdate.getFullYear();
ReactDOM.render(
  <div>
    <p> Created By {name}</p>
    <p> Copyright {Year}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

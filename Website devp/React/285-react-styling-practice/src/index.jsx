import React from "react";
import ReactDOM from "react-dom";
const currentHour = new Date().getHours();
let greeting;
const customStyle = {
  color: "",
};

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className='heading' style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);

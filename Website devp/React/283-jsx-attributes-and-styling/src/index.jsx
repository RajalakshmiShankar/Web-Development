import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/150";
ReactDOM.render(
  <div>
    <h1 className='heading'>My Favourite Foods</h1>
    <div>
      <img alt='random' src={img} />
      <img
        className='food-img'
        alt='icecream'
        src='https://www.milkmaid.in/sites/default/files/2022-12/Chocolate-Ice-Cream-335x300.jpg'
      />
      <img
        className='food-img'
        alt='kfc'
        src='https://content.jdmagicbox.com/v2/comp/mumbai/q3/022pxx22.xx22.220802092942.c9q3/catalogue/kfc-kurla-east-mumbai-fried-chicken-delivery-restaurants-2ws8tdzfvd.jpg'
      />
      <img
        className='food-img'
        alt='biriyani'
        src='https://yummyies.com/wp-content/uploads/2021/03/chiken-biriyani.jpg'
      />
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

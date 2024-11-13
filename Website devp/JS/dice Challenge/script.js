var randomNumber0 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage0 = "dice" + randomNumber0 + ".png";
var randomImageSource0 = "images/" + randomDiceImage0;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource0);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if (randomDiceImage0 > randomDiceImage1) {
  document.querySelector("#refresh").innerHTML = "Player 1 won🥳";
} else if (randomDiceImage0 < randomDiceImage1) {
  document.querySelector("#refresh").innerHTML = "Player 2 won🥳";
} else {
  document.querySelector("#refresh").innerHTML = "Draw😑";
}

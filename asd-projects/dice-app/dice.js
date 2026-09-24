$(document).ready(function () {
  // Your code goes here
  $("<div>")
   .css("height", 15)
   .css("width", 15)
   .css("background-color","black")
   .css("position","absolute")
   .css("top", 45)
   .css("left", 45)
   .appendTo("#die");

$("<div>")
  .css("height", 15)
   .css("width", 15)
   .css("background-color","black")
   .css("position","absolute")
   .css("top", 45)
   .css("left", 45)
   .appendTo("#die2");

  function makeDot(top, left, elementID) {
     $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color","black")
      .css("position","absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID);
  }

  function rollDie(dieID) {
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
      makeDot(45, 45, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(20, 20, dieID); // top left
      makeDot(70, 70, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(20, 20, dieID); // top left
      makeDot(70, 70, dieID); // bottom right
      makeDot(45, 45, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(70, 70, dieID); // bottom right
      makeDot(20, 20, dieID); // top left
      makeDot(20, 70, dieID); // bottom left
      makeDot(70, 20, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(45, 45, dieID); // middle middle
      makeDot(70, 70, dieID); // bottom right
      makeDot(20, 20, dieID); // top left
      makeDot(20, 70, dieID); // bottom left
      makeDot(70, 20, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(70, 70, dieID); // bottom right
      makeDot(45, 20, dieID); // middle right
      makeDot(70, 20, dieID); // bottom right
      makeDot(20, 70, dieID); // top left 
      makeDot(45, 70, dieID); // middle left
      makeDot(20, 20, dieID); // bottom left
    }
  }

  function handleClick() {
    rollDie("#die");
  }

  function handleClick2() {
    rollDie("#die2")
  }
  
  $("#die").on("click", handleClick);
  $("#die2").on("click", handleClick2);
});

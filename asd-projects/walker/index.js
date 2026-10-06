/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
// runs the entire program
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects 
  
  // hold the data needed to make the walker move
  const walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  };
  const walker2 = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  };

  // holds the number values for certain keys on the keyboard
  const KEY = {
    LEFT: 37,
    UP: 38, 
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83
  };
  
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */

  // jQuery for the keyUp and keyDown functions
  $(document).on('keydown', handleKeyDown);                          
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  // This function calls all of the helper functions to updates the frame shown on the screen
  function newFrame() {
    repositionGameItem();
    
    wallCollisions();

    redrawGameItem();
    
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */

  // This function handles what happens when a certain key is pressed down
  function handleKeyDown(event) {

    //code to control walker
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    } else if (event.which === KEY.UP) {
      walker.speedY = -5;
    } else if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    } else if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    } 

    //code to control walker2
    if (event.which === KEY.A) {
      walker2.speedX = -5;
    } else if (event.which === KEY.W) {
      walker2.speedY = -5;
    } else if (event.which === KEY.D) {
      walker2.speedX = 5;
    } else if (event.which === KEY.S) {
      walker2.speedY = 5;
    } 
    //console.log(event.which);
  }
// This function handles ehat happens when a certain key is released
  function handleKeyUp(event) {
    // code to control walker
    if (event.which === KEY.LEFT) {
      walker.speedX = 0
    } else if (event.which === KEY.UP) {
      walker.speedY = 0
    } else if (event.which === KEY.RIGHT) {
      walker.speedX = 0
    } else if (event.which === KEY.DOWN) {
      walker.speedY = 0
    } 
    
    // code to control walker2
    if (event.which === KEY.A) {
      walker2.speedX = 0
    } else if (event.which === KEY.W) {
      walker2.speedY = 0
    } else if (event.which === KEY.D) {
      walker2.speedX = 0
    } else if (event.which === KEY.S) {
      walker2.speedY = 0
    } 
    //console.log(event.which);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // This function would end the game, however it is never called so it does nothing at this moment
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  // This function repositions the walkers x and y coordinates
  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
    walker2.x += walker2.speedX;
    walker2.y += walker2.speedY;
  }
// This function redraws the walker on the screen
  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    $("#walker2").css("left", walker2.x);
    $("#walker2").css("top", walker2.y);
    //console.log("Walker position:", walker.x, walker.y);
  }

  // This object keeps the walker from going bast the edge of the board
  function wallCollisions() {
    walker.right = walker.x + $("#walker").width();
    walker.bottom = walker.y + $("#walker").height();
    if (walker.bottom > $("#board").height() || walker.y < 0) {
      walker.y -= walker.speedY
    }
    
    if (walker.right > $("#board").width() || walker.x < 0) {
      walker.x -= walker.speedX 
    }
  
    walker2.right = walker2.x + $("#walker2").width();
    walker2.bottom = walker2.y + $("#walker2").height();
    if (walker2.bottom > $("#board").height() || walker2.y < 0) {
      walker2.y -= walker2.speedY
    }

    if (walker2.right > $("#board").width() || walker2.x < 0) {
      walker2.x -= walker2.speedX 
    }
  }
}

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (0, 700, 100, 20);
    createPlatform (100, 525, 25, 20);
    createPlatform (200, 650, 50, 20);
    createPlatform (0, 450, 10, 20);
    createPlatform (150, 350, 20, 20, "lightBlue");
    createPlatform (150, 350, 3, 3);
    createPlatform (500, 500, 20, 700);
    createPlatform (350, 600, 20, 20);
    createPlatform (450, 500, 50, 20);
    createPlatform (500, 350, 20, 150, "lightBlue");
    createPlatform (500, 150, 20, 200);
    createPlatform (450, 150, 50, 20, "red");
    createPlatform (300, 250, 25, 20, "red");
    createPlatform ();
    createPlatform ();
    createPlatform ();
    createPlatform ();



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

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

    //toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(0, 700, 100, 20);
    createPlatform(100, 525, 25, 20);
    createPlatform(200, 650, 50, 20);
    createPlatform(0, 450, 10, 20);
    createPlatform(150, 350, 20, 20, "lightBlue");
    createPlatform(150, 350, 3, 3);
    createPlatform(500, 500, 20, 700);
    createPlatform(350, 600, 20, 20);
    createPlatform(510, 500, 50, 20);
    createPlatform(500, 350, 20, 150, "lightBlue");
    createPlatform(500, 150, 20, 200);
    createPlatform(450, 150, 50, 20, "lightBlue");
    createPlatform(450, 150, 3, 3);
    createPlatform(300, 250, 25, 20, "lightBlue");
    createPlatform(300, 250, 3, 3);
    createPlatform(430, 550, 10, 20);
    createPlatform(600, 600, 100, 20);
    createPlatform(800, 700, 50, 20);
    createPlatform(800, 700, 20, 50);
    createPlatform(1360, 450, 50, 15);
    createPlatform(1370, 330, 45, 15);
    createPlatform(1380, 210, 40, 15);
    createPlatform(1000, 600, 100, 20);
    createPlatform(800, 475, 50, 20);
    createPlatform(780, 425, 20, 70);
    createPlatform(1000, 200, 20, 200);
    createBadPlatform(1020, 380, 80, 20);
    createPlatform(1100, 200, 20, 200);
    createPlatform(1200, 500, 50, 20);
    createPlatform(950, 380, 50, 20);
    createPlatform(970, 250, 30, 20);

    // TODO 3 - Create Collectables

    createCollectable("duck", 0, 400);
    createCollectable("duck", 520, 460);
    createCollectable("duck", 1357, 50);
    createCollectable("duck", 1030, 300);
    
    // TODO 4 - Create Cannons

    createCannon("right", 800, 5);
    createCannon("bottom", 500, 900);
    createCannon("bottom", 300, 600);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

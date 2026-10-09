// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(increaseGreenByBlue);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for(var c = 0; c < row.length; c++) {
      var pixel = row[c];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      row[c] = updatedPixel;
    
      //console.log(updatedPixel);
      //console.log(image[r][c]);
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterWithNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      if (backgroundColor !== )
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}
//console.log(keepInBounds(-20)); // should print 0
//console.log(keepInBounds(300)); // should print 255
//console.log(keepInBounds(125)); // should print 125

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}
//var test = [100, 100, 100]
//reddify(test);
//console.log(test);

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] -= 50
}

function increaseGreenByBlue(pixelArray) {
pixelArray[GREEN] += pixelArray[BLUE];
keepInBounds(pixelArray[GREEN]);
}
// CHALLENGE code goes below here

// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
// This function applies and removes the filter
// from the image after clicking on certain buttons
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// This function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// This function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilterWithNoBackground(increaseGreenByBlue);
  applyFilter(greyScale);
  applyFilterWithNoBackground(invertColor);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
// This function is used to apply the chosen filter to each pixel of the image
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
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
// This function applies the chosen filter to all
// of the pixels in the image except the background
function applyFilterWithNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      if (row[j] !== backgroundColor) {
        var pixel = row[j];
        var pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        row[j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
// This function keeps the value of each color between 0,
// and 255  so that it can still be used as an rgb value
function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}
//console.log(keepInBounds(-20)); // should print 0
//console.log(keepInBounds(300)); // should print 255
//console.log(keepInBounds(125)); // should print 125

// TODO 4: Create reddify filter function
// This function sets the red value of every effected pixel to 200
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}
//var test = [100, 100, 100]
//reddify(test);
//console.log(test);

// TODO 7 & 8: Create more filter functions
// This function decreases the blue value of every effected pixel by 50
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] -= 50;
  keepInBounds(pixelArray[BLUE]);
}

// This function increases the green value of each effected
// pixel by its blue value
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] += pixelArray[BLUE];
  keepInBounds(pixelArray[GREEN]);
}
// CHALLENGE code goes below here

// This function inverts the color of each effected pixel
function greyScale(pixelArray) {
  pixelArray[RED] = (pixelArray[RED] + pixelArray[GREEN] + pixelArray[BLUE]) / 3;
  pixelArray[GREEN] = (pixelArray[RED] + pixelArray[GREEN] + pixelArray[BLUE]) / 3;
  pixelArray[BLUE] = (pixelArray[RED] + pixelArray[GREEN] + pixelArray[BLUE]) / 3;
  keepInBounds(pixelArray[RED]);
  keepInBounds(pixelArray[GREEN]);
  keepInBounds(pixelArray[BLUE]);
}

function invertColor(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
  keepInBounds(pixelArray[RED]);
  keepInBounds(pixelArray[GREEN]);
  keepInBounds(pixelArray[BLUE]);
}


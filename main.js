/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 *
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

/***********
 * QUERIES *
 ***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

//dark-mode
const body = document.querySelector(".main-body");
const btn = document.querySelector("button.dark");
btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (btn.innerText === "Light-mode") {
    btn.innerText = "Dark-mode";
  } else {
    btn.innerText = "Light-mode";
  }
});

//1.
// choosing  color
//all colors obj --act as an array??
const allColors = document.querySelectorAll(".palette .palette-color");

//brush
const brushColor = document.querySelector(".current-brush");

//change the background of brush color*******************************
for (const color of allColors) {
  //if click on particular color run the function
  color.addEventListener("click", function () {
    //if class of brushColor doesn't match with selected color
    // if (brushColor !== color) {
    //assign the brushColor the class of color..which is .palette.palette-color.color-(colorNum)
    //console.log to see both brushColor and color classList or className
    brushColor.classList = color.classList;

    console.log(brushColor);
    console.log(color.classList);
    // }
    //remove class palette-color, not now ..
    //..but when coloring the grid in next function
  });
}

//the grid where we'll color
const canvas = document.querySelector(".canvas");

//2.
//coloring the grid
//mousemove not working when changing color..???????????????????
//mouseenter now working at all ??????????????????????????
canvas.addEventListener("click", function (event) {
  event.target.classList = brushColor.classList;
//remove border
  event.target.classList.remove("palette-color");
  event.target.classList.remove("current-brush");
});

//reset
const reset = document.querySelector("button.reset");
const canvas1 = document.querySelectorAll(".canvas div");

reset.addEventListener("click", function () {
  for (const eachCanvas of canvas1) {
    eachCanvas.classList = "square color-5";
    //eachCanvas.classList[1] = 'color-5' //why not working
    console.log(eachCanvas.classList);
  }
});

/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

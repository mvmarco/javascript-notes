// ######################################################
// select the elements on the page - canvas, shake button
// ######################################################

const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // when it is a true constant is all uppercase and underscore
// ######################################################
// set up the context in 2d (for 3D check three.js)
// ######################################################

// contex refers to the object that the function is executing in
const cxt = canvas.getContext('2d');

// ##############################################################################
// make a variable called height and width from the same properties on our canvas
// ##############################################################################
/*

ES LINT gives error to this:

const width = canvas.width;
const height = canvas.height;

and convert it to this:

const { width } = canvas;
const { height } = canvas;

it happens when you make a variable with the name of a property of an object

you can shortcut it in this way (this is called distructure it, taking a width property
  and put it into a variable called width or height):

const { width, height } = canvas;

*/
const { width, height } = canvas; // equal to canvas.width or canvas.height
console.log(width, height);

// #####################################################
// create a random x and y starting points on the canvas
// #####################################################

let x = Math.floor(Math.random() * width); // math floor does if a number is 10.22 it gets 10, math random gives random number from 0 to 0.99 by myltiplying to something you get this number increased
let y = Math.floor(Math.random() * height);

// ######################################################
// setup our canvas for drawing
// ######################################################

cxt.lineJoin = 'round'; // it is when a line bend to make it round on the bending
cxt.lineCap = 'round'; // it is the line top and bottom rounded
cxt.lineWidth = MOVE_AMOUNT; // the line width by default is 1px

// changing colors of the line
let hue = 0;
cxt.strokeStyle = `hsl(${hue}, 100%, 50%)`; // check the starting color on mothereffing HSL website
// if put in the console ctx you get a set of properties you can set or get
cxt.beginPath(); // it will start the drawing - put the marker on the page
cxt.moveTo(x, y); // it will start to move the marker at spefic position
cxt.lineTo(x, y);
cxt.stroke();

// ######################################################
// write a draw function
// ######################################################

// the function has an option object/params.
// option is if we have multiple params and some of them are optional
// if we forget the optional argumentwhen we call the function with option params nothing happens

/*
 const draw = (options) => {
  console.log(options.key);
}; 

*/

// possible also to write it like with object descruturing (properties renamed into property variables):

const draw = ({ key }) => {
  hue += 10;
  cxt.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log('hhhhh');
  console.log(key);

  cxt.beginPath(); // start the drawing
  // move our x and y values depending on what the user did

  /* example but not what we need
  x -= MOVE_AMOUNT; // x = x - 10
  y -= MOVE_AMOUNT;
  */

  /* we need switch statement, which say take in a variable (the key) and depending on which key 
the user choose (up left down right) we have different outcome. Switch says considered these
4 different outcome do the following 
  */

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break; // this will stop the switch from running after doing the above and go to whater is after the switch
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break; // the default means if the arrowUp is not showing do this
  }
  cxt.lineTo(x, y);
  cxt.stroke();
};

// ######################################################
// write an handler for the keys (up or down)
// ######################################################

const handleKey = (event) => {
  // to prevent the scrolling of the page when pressing the arrows you can
  // but this will also block the functionality of the other keys
  // event.preventDefault();
  console.log(event.key); // this will show which key you pressed
  // after checking the key we want we need to select them
  if (event.key.includes('Arrow')) {
    draw({ key: event.key });
    event.preventDefault();
    console.log('HANDLING KEY');
  }
};

// ######################################################
// clear or shake function
// ######################################################
const clearCanvas = () => {
  canvas.classList.add('shake');
  cxt.clearRect(0, 0, width, height); // start 0 - 0 , in the top left corner and go for 500, 500 bottom right
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true } // it will run the eventListener only once
  );
};
// ######################################################
// listen for arrow keys
// ######################################################

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);

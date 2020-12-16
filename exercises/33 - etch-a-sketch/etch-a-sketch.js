// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');

// set up the context in 2d (for 3D check three.js)
// contex refers to the object that the function is executing in
const cxt = canvas.getContext('2d');

// setup our canvas for drawing   11:30
/* const width = canvas.width;
const height = canvas.height; */
console.log(width, height);
cxt.lineJoin = 'round'; // it is when a line bend to make it round on the bending
cxt.lineCap = 'round'; // it is the line top and bottom rounded
cxt.lineWidth = 10; // the line width by default is 1px
// if put in the console ctx you get a set of properties you can set or get
cxt.beginPath(); // it will start the drawing - put the marker on the page
cxt.moveTo(200, 200); // it will start to move the marker at spefic position
cxt.lineTo(200, 200);
cxt.stroke();
// write a draw function

// write an handler for the keys

// clear or shake function

// listen for arrow keys

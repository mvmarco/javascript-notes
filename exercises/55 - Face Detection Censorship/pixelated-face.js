// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d'); // contex refers to the object that the function is executing in

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d'); // contex refers to the object that the function is executing in

/* 
  The new keyword is used in javascript to create a object from a constructor function. 
  The new keyword has to be placed before the constructor function call 
  and will do the following things:

  1 Creates a new object
  2 Sets the prototype of this object to the constructor function's prototype property
  3 Binds the this keyword to the newly created object and executes the constructor function
  4 Returns the newly created object
*/
const faceDetector = new window.FaceDetector();

console.log(faceCanvas, faceDetector, video, canvas);

const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}
optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// Write a fucntion that will populate the users video
/* 
  calling this function in the console will not be possible, you can only if you
  console.log it here. Why? because we used a A JavaScript bundler
  a tool that puts your code and all its dependencies together in one JavaScript file.
  webpack is a bundler not sure what we used it
*/
async function populateVideo() {
  // The navigator object contains information about the browser.
  const stream = await navigator.mediaDevices.getUserMedia({
    // here you can say if you wanna a video or audio
    // by just saying video: true but here we want the video at specific dimensions
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();

  // size the canvases to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

/*
  calling this function in the console will not be possible, you can only if you
  console.log it here. Why? because we used a A JavaScript bundler
  a tool that puts your code and all its dependencies together in one JavaScript file.
  webpack is a bundler not sure what we used it 

  you can right click on the console and click store as variable and then you can
  always call it there. Usualy the console store the function in a variable with a
  new and different name such as temp1, that you can always call and refering to the
  original function.

  In our example if you call temp1 for instance, you don't get the original function
  because it is a special one but you get a PROMISE (next notes will show what that is)
  so In order to call a PROMISE you gotta put ASYNC and AWAIT (next notes will explain)
*/
console.log(populateVideo);

/* 
  if you call populateVideo() you get a MediaStream
  and the page immediately reloads
*/

populateVideo();

// a function that detects the face in the shot

async function detect() {
  const faces = await faceDetector.detect(video); // you can pass image video or canvas
  // ask the browser when the next animation frame is, and tell it to run detect for us
  // eslint-disable-next-line no-use-before-define
  faces.forEach(drawFace); // here goes to the draw face function and for each face runs it
  // eslint-disable-next-line no-use-before-define
  faces.forEach(censor);
  requestAnimationFrame(detect);
  // it works also with detect()

  /* 
    when a function calls itself inside itself is recursion,
    when a function runs ever and ever
    until there is an exit condition
  */
}

// here you draw the square in front of the face
function drawFace(face) {
  // if you check in the console each face, under boundinBox you get the coordinates
  // x and y refers to the browser, right left etc to the video, we use the latter
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );
  // draw the small face back on, but scale up

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect); // run the populate video and then the detect (detect has to be run every tot second but not with an interval but with request animation frame which tell us when the browser should do something and not every tot second like with the intervals)

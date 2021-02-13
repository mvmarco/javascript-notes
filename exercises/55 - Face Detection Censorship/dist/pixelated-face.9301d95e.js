// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pixelated-face.js":[function(require,module,exports) {
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
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');
const options = {
  SIZE: 10,
  // all caps because they are constant in the whole application
  SCALE: 1.35
};

function handleOption(event) {
  const {
    value,
    name
  } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption)); // Write a fucntion that will populate the users video

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
    video: {
      width: 1280,
      height: 720
    }
  });
  video.srcObject = stream;
  await video.play(); // size the canvases to be the same size as the video

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

populateVideo(); // a function that detects the face in the shot

async function detect() {
  const faces = await faceDetector.detect(video); // you can pass image video or canvas
  // ask the browser when the next animation frame is, and tell it to run detect for us
  // eslint-disable-next-line no-use-before-define

  faces.forEach(drawFace); // here goes to the draw face function and for each face runs it
  // eslint-disable-next-line no-use-before-define

  faces.forEach(censor);
  requestAnimationFrame(detect); // it works also with detect()

  /* 
    when a function calls itself inside itself is recursion,
    when a function runs ever and ever
    until there is an exit condition
  */
} // here you draw the square in front of the face


function drawFace(face) {
  // if you check in the console each face, under boundinBox you get the coordinates
  // x and y refers to the browser, right left etc to the video, we use the latter
  const {
    width,
    height,
    top,
    left
  } = face.boundingBox;
  /*
    here you get the values
      console.log(width, height, top, left);
    here the objects with the keys and value: eg: width: 139.289302932093
    better for understanding the names
      console.log({ width, height, top, left });
  */
  // clear the width and the width and the height all the time is run

  ctx.clearRect(0, 0, canvas.width, canvas.height); // these are the colors and line width the border too

  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
} // this pixelate the user face


function censor({
  boundingBox: face
}) {
  /* 
    function censor(face) {
      const faceDetails = face. bounding box
    }
    can be denscrutured 
    function censor({ boundingBox })
    and you can rename it into a variable called face like above
  */
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height); // draw the small face

  /*  
    basically what happens is that you take a screenshot of the face,
    you make it smaller, loose the pixel quality,
    and put it back on the screen
  
  */

  faceCtx.drawImage( // 5 source args that we take out from the face
  video, // where does the source come from?
  face.x, // where do we start the source pull from?
  face.y, face.width, face.height, // 4 draw args that we put back
  face.x, // where should we start drawing the x and y?
  face.y, options.SIZE, options.SIZE); // draw the small face back on, but scale/strecht it up

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(faceCanvas, // source
  face.x, // where do we start the source pull from?
  face.y, options.SIZE, options.SIZE, // Drawing args
  face.x - (width - face.width) / 2, face.y - (height - face.height) / 2, width, height);
}

populateVideo().then(detect); // run the populate video and then the detect (detect has to be run every tot second but not with an interval but with request animation frame which tell us when the browser should do something and not every tot second like with the intervals)
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45041" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","pixelated-face.js"], null)
//# sourceMappingURL=/pixelated-face.9301d95e.js.map
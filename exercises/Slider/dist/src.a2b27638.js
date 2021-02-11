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
})({"src/index.js":[function(require,module,exports) {
/* 
  a slider is basically a class adder/remover through each slide in the html
  we put this file in src because we have multiple JS, and it is common way to do it
*/
// the slider refers to the div/elementwith the class of slider
function Slider(slider) {
  // here you say if the slider is not an element throw an error

  /* 
    instead of just passing if(!slider) {
      throw new Error('No slider passed in');
    }
     in this case if you pass slider('jsjss') it would not be an error
    because you pass a function with something in, no matter if it is not an element
  */
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  } // create some variables for working with the slider

  /* 
    we need to keep track for prev, current and next to begin with
    and they have to be empty because we will fill them up when the 
    slider starts, and when the user navigates with previous and next
    button.
     prev, current and next are basically the SCSS classes associated to
    the slide. We keep them here at the beginning
  */


  var prev;
  var current;
  var next; // select the elements needed for the slider

  var slides = slider.querySelector('.slides');
  var prevButton = slider.querySelector('.goToPrev');
  var nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    /*
      here we update/popilate the variables "prev", "current" and "next"
      and we update within the function and not create a const inside
      this startSlider with current, is because we have other functions
      such as move(), applyClasses() and both of those functions
      need to access the "current", "prev" and "next".
       So if instead you create a const "prev" or "current" or "next"
      that const would be accessible only inside this function. By creating
      them inside the slider funtion all the other function inside can access
      them.
       That is the concept of "closures" having variables at higher level that 
      can be accessed at the lower level. They are not global variables but
      are variables that are living inside the closure slider function 
    */

    /* 
      1 you take slider because it is the argument of the slider function
      which is the instance with the slider div. (bottom of the page 
      const mySlider = Slider(document.querySelector('.slider'));) 
      from there you take the class .current which is applied to have an automatic start for the first
      slider or the firstElementChild of slides (const slides = slider.querySelector('.slides'))  
      which is in the mother function. Why? because the second div. does not have a current class
      so you gotta take the first element child of the div.class
       2 for "prev" you take the same element before it, or the last for the second slider
      because before the 1st there is the last. 
       3 with next same logic but inverted
       HOW TO TEST IT: CONSOLE>SELECT WITH THE ARROW ONE OF THE SLIDE NUMBER> OPEN CONSOLE AND 
      TYPE $0.previousElementSibling
     */
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({
      current: current,
      prev: prev,
      next: next
    });
  }
  /* 
    the difference between LastElementChild vs LastChild:
     if you have:
      <p> I <strong>love</strong> to eat <strong>pizza</strong> </p>
      $0.nextSibling (of <strong>love</strong>) is to eat
      $0.nextElementSibling (of <strong>love</strong>) is pizza
    the difference is that nextSibling gives us a node and a node can neither be 
    a straight up text or an element. Whereas nextElementSibling gives as the element
   */


  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    var _prev$classList, _current$classList, _next$classList;

    // first strip all the classes off the current slides
    // create an array of classes to remove
    var classesToRemove = ['prev', 'current', 'next'];
    /* 
      another way would be
      ['prev', 'current', 'next'].forEach(el => el.classList.remove(...classesToRemove))
    */

    (_prev$classList = prev.classList).remove.apply(_prev$classList, classesToRemove);

    (_current$classList = current.classList).remove.apply(_current$classList, classesToRemove);

    (_next$classList = next.classList).remove.apply(_next$classList, classesToRemove);

    if (direction === 'back') {
      /* 
        take the array the value "prev", "current", "next" and associate new value.
        "prev" has to be the previousElement Sibling
        "current" is gonna be "prev"
        and "next" is gonna be "current" 
        check the order:
        make an new array of the new values, and destructure them over and into the prev,
        current and next variables.
      */
      var _ref = [// get the prev slide, if there is none, get the last slide from the entire slider for wrapping
      prev.previousElementSibling || slides.lastElementChild, // otherwise you get errors
      prev, current];
      prev = _ref[0];
      current = _ref[1];
      next = _ref[2];
    } else {
      var _ref2 = [current, next, // get the next slide, or if it's at the end, loop around and grab the first slide
      next.nextElementSibling || slides.firstElementChild];
      prev = _ref2[0];
      current = _ref2[1];
      next = _ref2[2];
    }

    applyClasses(); // here you re-apply the classes with the right order
  } // when this slider is created, run the start slider function and apply the classes


  startSlider();
  applyClasses(); // Event listeners
  // if you need to pass an argument you can just put the arrow function

  prevButton.addEventListener('click', function () {
    return move('back');
  }); // when it is not necessary you can just call the function itself

  nextButton.addEventListener('click', move);
} // eslint-disable-next-line no-unused-vars


var mySlider = Slider(document.querySelector('.slider')); // eslint-disable-next-line no-unused-vars

var dogSlider = Slider(document.querySelector('.dog-slider'));
/* 26 */
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43373" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map
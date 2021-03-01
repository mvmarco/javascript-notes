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
})({"node_modules/waait/index.js":[function(require,module,exports) {
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

module.exports = wait;

},{}],"index.js":[function(require,module,exports) {
"use strict";

var _waait = _interopRequireDefault(require("waait"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
  // #################################
  // WTH IS NPM
  // #################################

  The letters npm stand for “node package manager”. When you are working on a JavaScript project, 
  you can use npm to install other people’s code packages into your own project.

  npm is a tool you install on your computer. It’s part of node, so install the LTS version of Node 
  (https://nodejs.org/en/)to get both the node and npm commands in your command line.

  You use npm from the command line to install, uninstall or update packages. By “package” I mean 
  any piece of code which someone has chosen to publish on npm.

  Some examples of npm packages are:
  Angular
  React
  jQuery
  Express
  Socket.io

  There are thousands of packages published on npm. You can browse them on https://www.npmjs.com/
  To use npm packages in a project, your project must contain a file called "package.json". 
  This file keeps a list of all the packages you are using, and which version of each one you 
  have chosen to use.

  Each time you open your project on a different computer, you may have to reinstall all your 
  packages. This is especially true if you are moving between Mac and Windows. This is because 
  not all packages are cross-compatible, and sometimes need a version downloaded for the specific 
  system you are using it on. When you open a project for the first time or on a different computer, 
  reinstall all your packages: cd "to your project" and then run "npm install" 

  After running npm install there will be a new folder in your project called node_modules. 
  This folder contains all the code for all the packages you have installed.
  Check below for more:

*/
// #################################
// STEPS FOR PACKAGE JSON AND PARCEL
// #################################

/* 
  1. "npm init" created the package.json directory
  2. "npm install parcel-bundler -D"  install parcel and put the web dependency (with shortcut)
      it creates also a "node_modules" folder with around 500 files. What happens is that parcel
      has dependencies itself, little packages that it needs in order for it to work. It is always
      fine to delete the "node_modules" folder because you can always get it back by installing
      "npm install". The thing is that we want some dependencies in our package.json. 
  3. remove: "test": "echo \"Error: no test specified\" && exit 1" 
     and add: "start": "parcel index.html" necessary to run parcel
  4. in order to avoid any errors from the browser when we use async-await we could put:
     "browserslist": ["last 1 chrome versions"]
  5. run "npm start", in case of error cancel "cache" and "dist" and run again "npm start"

*/
// #################################
// INSTALLING OTHER DEPENDENCIES
// #################################

/* 
  to install other depencies like "faker", "date-fns", "await-to-js", "lodash", "axios"
  we can install them all together by putting a space between them as follow:
  "npm i faker date-fns await-to-js lodash axios" and then "npm start"

  notice that we do not add -D (put them in dev-dependencies) as they are just "dependecies".
  Dependecies that make our project easy to develop and make our project run in production
  and they are necessary to make the project work. without them the production wont work. It
  will only work with a manual code of these dependencies but it is harder to code. And not
  an easy package. check the example below.

  while "devDependencies" are required only when developing our project and 
  will not be necessary for the production. Like Parcel: The browser does not care if we 
  use parcel or not for the final live code (in production).Build tools (webpack, parcel, snowpack)
  are only that, build tools. They do not run in production when you host a website.
*/
// #################################
// INSTALLING OTHER
// #################################

/* 
  https://www.npmjs.com/package/waait this is the function we wrote all the time:

  const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

  we could install it separetely with "npm i waait" and again "npm start"

  in the doc the function and how to import it is:

  import wait from 'waait';

  async function doStuff() {
    doSomething();
    await wait();
    doSomethingElse();
    await wait(200);
    console.log('200ms later');
  }

  so we can create a function as follow and import the "wait" with any name as it is a default
  export. This is the smallest idea of what a package does, as small as a little function.
*/
async function go() {
  console.log('Going');
  await (0, _waait.default)(200);
  console.log('ending');
}

go();
},{"waait":"node_modules/waait/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45395" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/82%20-%20npm%20modules.e31bb0bc.js.map
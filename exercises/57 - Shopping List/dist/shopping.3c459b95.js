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
})({"shopping.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* 
  first thing is to listen to everytime the user type into the input (add item)
  add hit the submit button. if you dont add an event listener whatever the user
  put goes to the url but does not go anywhere

  second we gotta keep track of all the items, whether or not they are complete
  on the screen

  thrird we gotta render/give out a list of those items
*/
var shoppingForm = document.querySelector('.shopping');
var list = document.querySelector('.list'); // We need an array to hold our state (all the items)

/* 
  state means in JS when you have state, state is a bunch of data that reflects
  the status of your application. State contains the list of all the items you got
  the IDs of that items or whether or not they have been completed (sold, expensive
  etc etc)
*/

var items = []; // first step

function handleSubmit(e) {
  e.preventDefault(); // stop the submission

  console.log('submitted!!');
  console.log('check here', e.currentTarget);
  console.log('check here', e.currentTarget.item.value); // get the data from what the user type¨
  // you gotta do .item.value because item is the name of the input
  // you can use whatever is inside the input to get the value
  // and we need to get the value of the input which is what the user types
  // not just the current target which is the form itself, you cannot store that info as data

  /* 
    you can get the value using ID or the name attribute but those themselves have no value
    but rather they are pointers to the form inputs which do have values that are accessible.
  */

  var name = e.currentTarget.item.value; // if its empty what the user put, then dont submit it - we also added the required in the HTML

  if (!name) return;
  /* 
    now we gotta store the user input as data in the array items
    but we cannot just store straight strings but more information¨
    like the ID, is it completed? if it is bought or not and the 
    actual name
  */

  var item = {
    name: name,
    // equale to name: name, it has been refactored
    id: Date.now(),
    // something unique, that is the trick as long as you dont add items in milliseconds
    // that could be a problem for databases if you save them fast
    complete: false // by default are not completed or bought

  }; // Push the items into our state

  items.push(item);
  console.log("There are now ".concat(items.length, " in your state")); // Clear the form, it cleans the target of the form so the user does not have to cancel
  // all the time the word that he puts
  // the below code is the same as e.currentTarget.item.value = '';

  e.target.reset();
  /* 
    now we gotta display the items, we could just fo it with:
     displayItems();
     but in larger JS applications we have to display items not only when the user adds them
    but for instance:
      1 when the page is reloaded the items should be still there from the local storage
      2 display them also when we mark them as completed or sold/bought
      3 when delete an item you gotta show the items not deleted
    so it is necesary to do more things in larger JS applications
     Like if you want 2 of this display sectiond you cannot just copy the inner function
    (display items) of the event to other parts because it will be too much code.
     An alternative would be to use our own events or custom events(event systems),
    where we listen to those events and listen to items updated event
     so instead of display the items we are gonna to fire off a custom event that 
    will tell anyone else who cares that the items have been updated!
     dispatch means that an event happens for instance: when focusing a text bar or
    clicking a submit the browser dispatch an event
     dispatchEvent() is a method that lives inside every dom element and you gotta
    give a new CustomEvent (which is a function in the console) and its name
  */

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  /* 
    in otder to display the items, you call the items and create
    a new array with .map where for each name you put it inside a
    list:
     names = ['marco', 'olivia']
    names.map(name => `<li> ${name} </li>`)
    // here you get something like ["<li> marco </li>", "<li> olivia </li>"];
    so you can just call join and select the individual list names
    all together would be: names.map(name => `<li> ${name} </li>`).join("");
    <li> marco </li>
    <li> olivia </li>
  */
  // the class shopping item just put some style to the items on the list
  // &times gives the x sign and aria-label prevent that is read as multiplication for screen readers

  var html = items.map(function (item) {
    return "<li class=\"shopping-item\"> \n      <input\n        value=\"".concat(item.id, "\"\n        type=\"checkbox\"\n        ").concat(item.complete && 'checked', "\n      >\n      <span class=\"itemName\">").concat(item.name, "</span>\n\n      <button\n        aria-label=\"Remove ").concat(item.name, "\"\n        value=\"").concat(item.id, "\">\n        &times;\n      </button aria-label=\"Remove>\n  </li>");
  }).join('');
  list.innerHTML = html; // const list = document.querySelector('.list');
}
/* 
  in the console if you type localStorage you get a Storage or an object with all the
  items, if you do localStorage.setItem(key, value) so if you do
  localStorage.setItem('name', 'wes') you put it in the local storage
  the opposity would be to get them from there with 
  localStorage.getItem('name')  you just pass the key --> and you get the value 'wes'

  so in the application you will see a table of 2 columns one is for the keys
  like 'name' and one is for the values like 'wes'

*/


function mirrorToLocalStorage() {
  console.info('Saving items to localstorage'); // if you dont stringfy you just put objects and you need to put string/text to see them

  /* 
    if you get a number or an array you can just do: string.toString() or array.toString()
    but if you got an object and call object.toString the result will be "object object"
    many times as the items inside the object itselt. so if you got an object
     const person = {name: 'ves', age: 100} 
    person.JSON.stringify(items) you will get a object with inside each element in a string
    format
     {"name: 'wes'", "age: 100" }¨
     if you wanna go back to the normal object from a string you can do
    person.JSON.parse(items)
  */

  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS'); // pull the items from LS

  var lsItems = JSON.parse(localStorage.getItem('items')); // convert them back to an object

  if (lsItems.length) {
    var _items;

    // check if there is a length of items (the first time the user load the page would be empty)
    // you could also update items = lsItems; with a let instead of a const but too confusing
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1]); that is what spread does
    (_items = items).push.apply(_items, _toConsumableArray(lsItems)); // easier like this


    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}
/* 
  you cannot just put here:

  const buttons = list.querySelectorAll('button');

  because the event listener that display items in submit or from the storage
  are called later, so if you console.log(buttons)
  you do not see any buttons in the console as the list will be empty of products
  and therefore no buttons are found.

  so you can think to put it after those mentioned event listeners and create the 
  delete button events:

  function delteItem(id) {
    console.log("deleting items")
  }  

  // in the console this function works only on the old products but if you
  // add new ones it will not work anymore on any products?????





  const buttons = list.querySelectorAll('button'); 1
  buttons.forEach(button => button.addEventListener('click', deleteItem)); 2
*/


function deleteItem(id) {
  console.log('DELETIENG ITEM', id); // update our items array without this one

  items = items.filter(function (item) {
    return item.id !== id;
  });
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  var itemRef = items.find(function (item) {
    return item.id === id;
  });
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
} // ######################
// first step
// ######################


shoppingForm.addEventListener('submit', handleSubmit); // ######################
// first step
// ######################
// here you take the custom even and add display items function

list.addEventListener('itemsUpdated', displayItems);
/* 
  here you add the display items custom event to mirrorLocalStorage.
  a local storage is a sort of database that lives inside the browser.
  It is just a way to save some data in the user browser for the future time.

  how to find is console > application tab > local storage > domain name(localhost)
  any website has it. check it out

*/

list.addEventListener('itemsUpdated', mirrorToLocalStorage); // Event Delegation: We listen or the click on the list <ul> but then
// delegate the click over to the button if that is what was clicked

list.addEventListener('click', function (e) {
  var id = parseInt(e.target.value);

  if (e.target.matches('button')) {
    deleteItem(id);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45367" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","shopping.js"], null)
//# sourceMappingURL=/shopping.3c459b95.js.map
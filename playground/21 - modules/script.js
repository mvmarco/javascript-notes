// #############################
// MODULES
// #############################

/* 
  "modules" give you the ability to share code (data and functionalities) accross multiple files
  and even multiple projects. In its own essense "modules" are a way to structure and organize your
  javaScript.

  First: "modules" have their own scope, like functions have thers. A "module" that is going to be
  its own file will have its own scope. So we do have to worry about global variables. "Modules"
  can hold, functionalities, data, hold config.
  -------------------------
  Example of "module": Like in the currency exercise we have the currencies object, we could put
  it in its own file as a module and call it whenever we need on the currency exercise self.

  Another example: we can do a module with utility functions, like in the dadJokes exercise.
  we could have put in a module the function "randomItemFromArray(arr, not)" and call it
  on dadJokes or wherever we needed.
  -------------------------
  "Modules" can be also called "ESM" or "ECMAScript modules" or "ES6 modules" as the 
  verbage that people use to refer to them.
*/

// EXAMPLE: const names = 'Marco';

/*
  now in utils.js we have this function:
  
  function returnHi(name) {
    return `hi ${name}`;
  }
  
  can we just call that function here in this file?

  returnHi(name);
  
  If we try we get: "Uncaught ReferenceError: returnHi is not defined"
  
  THE NOT SO GOOD SOLUTION: put the "utils.js" into the html file before the "script.js". Then 
  run:   console.log(returnHi(names));
  the only reason why it works it is because "utils.js" comes first and
  returnHi() is a globally scoped. But it is really bad practice. just imaging having
  30 script files one connected to each other and they have to be ordered properly in the html.
  it is a mess.

  THE REAL SOLUTION: using "modules", so when we need a function like returnHi() we can simply
  import it, from the funciton, or module or file that has that function in it. In this case
  the file or module is "utils.js". Then we do not have to worry about things loading before
  another thing because we are simply going to import that value beforehand. So you don't even
  need to call the "utils.js" inside the html file. The "script.js" is gonna be our entry point
  into our JavaScript. The only thing we need to add to our JavaScript script tag where "script.js"
  is in the HTML is a 'type="module"'.  The only problem is that you cannot use "module" if you
  do not run a server. we cannot use Parcel because Parcel also handle modules by itself. Here
  we are trying to learn how module works without using any type of bundler such as Parcel. The
  way would be use "live-server extension" or run this: 
  
  "npm install -g browser-sync" then go to to the "modules" folder in the terminal and run:
  "browser-sync" and click the first local server. The only thing that does not reaload itself.

  if we the "browser-sync" we get an error in the console that says:
  "Refused to apply style from 'http://localhost:3000/base.css' because its MIME 
  type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled."
  it is because we might have in our HTML file a file that is outside of the root folder, like for
  instance a <link rel="stylesheet" href="../../base.css">  - so we can just copy this CSS file 
  and put it inside our modules folder, so it is inside the root folder.


  now that works, we gotta export from the module file, or the file that includes the function we need,
  the actual function. and then Import it into the file we want.
  
  EXPORT: the export works just putting the word "export" in front of your function:
  
  export function returnHi(name) {
    return `hi ${name}`;
  }
  

  IMPORT: we import by putting "import {name of the function we want to import}" on top of the page
  "from ./thefile we want to import from":

  import {returnHi} from './utils.js
*/
import { returnHi } from './utils.js';

const name = 'Marco';

console.log('it works');
returnHi(name);

/*
  as we said modules are scoped. if in utils.js we have: const surname = 'buddy'
  if you console.log(surname) into script.js you get the error: "surname not defined"
  but if you do in utils:

  const sursname = "buddy"
  export function returnHi(name) {
    return `hi ${name} ${surname}`;
  }

  now the returnHi(name); will log in the console: marco buddy


*/

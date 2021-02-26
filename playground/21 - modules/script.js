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

const names = 'Marco';

/*
  now in utils.js we have this function:
  
  function returnHi(name) {
    return `hi ${name}`;
  }
  
  can we just call that function here in this file?

  returnHi(name);

  If we try we get: "Uncaught ReferenceError: returnHi is not defined"
 
  THE NOT SO GOOD SOLUTION: put the "utils.js" into the html file before the "script.js"
  the only reason why it works it is because "utils.js" comes first and
  returnHi() is a globally scoped. But it is really bad practice. just imaging having
  30 script files one connected to each other and they have to be ordered properly in the html.
  it is a mess.

  THE REAL SOLUTION: using "modules", so when we need a function like returnHi() we can simply
  import it, from the funciton, or module or file that has that function in it. In this case
  the file or module is "utils.js". Then we do not have to worry about things loading before
  another thing because we are simply going to import that value beforehand.
*/

console.log(returnHi(names));

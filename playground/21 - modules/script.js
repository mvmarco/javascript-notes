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

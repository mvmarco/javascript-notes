// ############################
// HOISTING
// ############################

// refers to variables and functions
/* hoisiting: JS when runs takes all the functions declaration 
and move them on the top by default so they are available to you
so you could run a function before it is declared: */

// example (IT WORKS ONLY WITH FUNCTION AND NOT ARROW FUNCTIONS or let or const:

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-use-before-define
sayHi();

function sayHi() {
  console.log('hey i am hoisting');
}

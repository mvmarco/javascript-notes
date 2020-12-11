// ############################
// SCOPE SECTION
// ############################

// answer the question: where are my functions and variables availale to me.

/* a global variable is a variable not inside of a function, a module or a if statement
 and you can access on any js that is running the page (console, script or file itself).
 in the console the global variables are declared with the window object.
 if you click window, you can see everything attached to the global scope (like methods and variables)
 */

const first = 'marco';
console.log(first);

// if you type window.first you get undefined, only if you call var it works
// var is attached to the window
// it is not adviced to use global variable

const sayHi = () => console.log('say hi');
const printing = sayHi();
console.log(printing);
// if you call window.sayHi(); it works because function are attached to window
// only let and const are not attached to the window but var it is

// another example:
// eslint-disable-next-line no-unused-vars
const age = 100;
// eslint-disable-next-line no-unused-vars
const go = () => {
  // eslint-disable-next-line no-unused-vars
  const hair = 'blonde';
};

/* age will be read but not hair because it is inside of a function
the only way to read hair is to return it inside the function
console.log(hair);
or call the function itself  */

/* or another case 

const age = 100;
const go = () => {
  const hair = 'blonde';
  const age = 200;
  console.log(age);
  console.log(hair);
};

200 will have priority because it is inside a function, 
if const age = 200 is not present inside a function will be taken a const
outside, which is 100.

Anyway the variables can be named the same as long as they are not in the same
scope. The variable in the function will overwrite the one outside the scope.
which is called shadowing another variable, or shadow variable.
But have different name is advised
*/

// ############################
// BLOCK SCOPED
// ############################

/* If we have a block or curly brakets {} we cannot read the variable
outside of the blocks (same as the function scope variables). So it is advised
to declare/initialised those variable outside of the block or the scope and update them
inside. Also because we can use them more than one time and for other things.
for instance: 

let cool;

if ( 1=== 1) {
  cool = true
}


another example is if we have two scope, a function one and a block one inside of the function.


const isCool = () => {
  let cool;
  if (name === 'wes') {
    cool = true
  }
  return cool
}

following the same logic as above cool will be updated in the if block and
read inside the function
because it is declared inside the function and not inside the block

*/

// ############################
// LEXICAL&STATIC SCOPING
// ############################

/* 
Lexical scoping means the variable cares where it is defined and not where it is run.
in this case lapo is gonna run because because it cares where it is defined (logDog())
)and not where it runs (dogTwo()). In other words the order is:

from dogTwo(); goes to logDog function search for dog outside and takes lapo, 
then it brings back lapo to logDog in dogTwo and print it

const dog = 'lapo';

const logDog = () => {
  console.log(dog);
};

const dogTwo = () => {
  const dog = 'emma';
  logDog();
};
17777777777777
dogTwo(); 



but if you do like this, it will run emma because it is equal to pass a string as argument:

const dog = 'lapo';

const logDog = (dog) => {
  console.log(dog);
};

const dogTwo = () => {
  const dog = 'emma';
  logDog('emma');
};
17777777777777
dogTwo();
*/

// ############################
// FUNCTIONS SCOPING
// ############################

/* just like variables functions are going to be scoped to the parent function

const sayHi = () => {
  yell = () = {
    console.log(name.toUpperCase());
  }
  yell();
}

if you call yell(); outside is gonna be undefined


*/

// ############################
// BEST PRACTICES
// ############################

// don't create global variables
